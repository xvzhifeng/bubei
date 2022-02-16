package com.sumu.bubei.models.word.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.sumu.bubei.common.rest.entity.ResultInfo;
import com.sumu.bubei.models.login.entity.User;
import com.sumu.bubei.models.login.service.impl.UserServiceImpl;
import com.sumu.bubei.models.word.entity.Sentences;
import com.sumu.bubei.models.word.entity.SentencesRelaction;
import com.sumu.bubei.models.word.entity.UserNotStudyWordRecord;
import com.sumu.bubei.models.word.entity.Words;
import com.sumu.bubei.models.word.entity.vo.WordVo;
import com.sumu.bubei.models.word.service.impl.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author sumu
 * @since 2022-02-13
 */
@RestController
@RequestMapping("/words")
public class WordsController {

    @Autowired
    WordsServiceImpl wordsService;

    @Autowired
    SentencesServiceImpl sentencesService;

    @Autowired
    SentencesRelactionServiceImpl sentencesRelactionService;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    UserNotStudyWordRecordServiceImpl userNotStudyWordRecordService;

    @Autowired
    UserStudyWordRecordServiceImpl userStudyWordRecordService;

    @RequestMapping("/addWord")
    @ResponseBody
    public ResultInfo add(@Validated Words words) {
        QueryWrapper<Words> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("japaneseMeans",words.getJapaneseMeans());
        boolean save = wordsService.saveOrUpdate(words,queryWrapper);
        if (save) {
            return new ResultInfo().success(HttpStatus.OK.value(), "添加成功");
        } else {
            return new ResultInfo().success(HttpStatus.BAD_REQUEST.value(), "添加失败");
        }
    }

    @RequestMapping("/addWordAndSentence")
    @ResponseBody
    public ResultInfo addWordAndSentence(@RequestBody @Validated WordVo words) {
        StringBuilder message = new StringBuilder();
        Words word = new Words();
        word.setChineseMeans(words.getChineseMeans());
        word.setEnglishMeans(words.getEnglishMeans());
        word.setJapaneseMeans(words.getJapaneseMeans());
        word.setVoice(words.getVoice());
        word.setFalseName(words.getFalseName());
        QueryWrapper<Words> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("japaneseMeans", word.getJapaneseMeans());
        wordsService.saveOrUpdate(word, queryWrapper);
        Words one = wordsService.getOne(queryWrapper);
        message.append("word add success");
        words.getSentence().forEach((sentences) -> {
                    sentences.setKind(2);
                    UpdateWrapper<Sentences> sentencesUpdateWrapper = new UpdateWrapper<>();
                    sentencesUpdateWrapper.eq("japaneseMeans", sentences.getJapaneseMeans());
                    sentencesService.saveOrUpdate(sentences, sentencesUpdateWrapper);
                    Sentences one1 = sentencesService.getOne(sentencesUpdateWrapper);
                    SentencesRelaction sentencesRelaction = new SentencesRelaction();
                    sentencesRelaction.setSentenceID(one1.getSentenceID());
                    sentencesRelaction.setWordID(one.getWordID());
                    sentencesRelactionService.saveOrUpdate(sentencesRelaction);
                });

        words.getPhrase().forEach((sentences) -> {
                    sentences.setKind(1);
                    UpdateWrapper<Sentences> sentencesUpdateWrapper = new UpdateWrapper<>();
                    sentencesUpdateWrapper.eq("japaneseMeans", sentences.getJapaneseMeans());
                    sentencesService.saveOrUpdate(sentences, sentencesUpdateWrapper);
                    Sentences one1 = sentencesService.getOne(sentencesUpdateWrapper);
                    SentencesRelaction sentencesRelaction = new SentencesRelaction();
                    sentencesRelaction.setSentenceID(one1.getSentenceID());
                    sentencesRelaction.setWordID(one.getWordID());
                    sentencesRelactionService.saveOrUpdate(sentencesRelaction);
                });
        return new ResultInfo().success(HttpStatus.OK.value(), message.toString());
    }

    @RequestMapping("/getStudyWords")
    @ResponseBody
    public ResultInfo getStudyWords(User user) {
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.eq("email",user.getEmail());
        User user1 = userService.getOne(userQueryWrapper);
        QueryWrapper<UserNotStudyWordRecord> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("userID",user1);
        IPage<UserNotStudyWordRecord> notStudy = new Page<>(1,10);
        userNotStudyWordRecordService.page(notStudy,queryWrapper);
        List<WordVo> res = new ArrayList<>();

        notStudy.getRecords().forEach((words)->{
            WordVo subRes = new WordVo();
            List<Sentences> sentencesList = new LinkedList<>();
            List<Sentences> phraseList = new LinkedList<>();
            QueryWrapper<Words> wordsQueryWrapper = new QueryWrapper<>();
            wordsQueryWrapper.eq("wordID",words.getWordID());
            Words words1 = wordsService.getOne(wordsQueryWrapper);
            QueryWrapper<SentencesRelaction> sentencesRelactionQueryWrapper = new QueryWrapper<>();
            sentencesRelactionQueryWrapper.eq("wordID",words1.getWordID());
            List<SentencesRelaction> list = sentencesRelactionService.list(sentencesRelactionQueryWrapper);
            list.forEach((sr)->{
                QueryWrapper<Sentences> sentencesQueryWrapper = new QueryWrapper<>();
                sentencesQueryWrapper.eq("sentenceID",sr.getSentenceID());
                Sentences sentences = sentencesService.getOne(sentencesQueryWrapper);
                if(sentences.getKind() == 1) {
                    phraseList.add(sentences);
                } else if (sentences.getKind() == 2) {
                    sentencesList.add(sentences);
                }
            });
            setWordsVo(subRes,words1);
            subRes.setSentence(sentencesList);
            subRes.setPhrase(phraseList);
            res.add(subRes);
        });
        return new ResultInfo().success(HttpStatus.OK.value(),"OK",res);
    }

    public void setWordsVo(WordVo wordsVo, Words words) {
        wordsVo.setChineseMeans(words.getChineseMeans());
        wordsVo.setEnglishMeans(words.getEnglishMeans());
        wordsVo.setJapaneseMeans(words.getJapaneseMeans());
        wordsVo.setVoice(words.getVoice());
        wordsVo.setFalseName(words.getFalseName());
    }
}
