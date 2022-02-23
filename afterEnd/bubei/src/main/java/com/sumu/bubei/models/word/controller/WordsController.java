package com.sumu.bubei.models.word.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.sumu.bubei.common.rest.entity.ResultInfo;
import com.sumu.bubei.models.login.entity.User;
import com.sumu.bubei.models.login.entity.vo.UserVo;
import com.sumu.bubei.models.login.service.impl.UserServiceImpl;
import com.sumu.bubei.models.word.entity.*;
import com.sumu.bubei.models.word.entity.vo.BookAndUserVo;
import com.sumu.bubei.models.word.entity.vo.StudyRecordVo;
import com.sumu.bubei.models.word.entity.vo.WordVo;
import com.sumu.bubei.models.word.entity.vo.wordOption;
import com.sumu.bubei.models.word.service.impl.*;
import com.sumu.bubei.models.word.utils.Common;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

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
// 解决跨域
@CrossOrigin
@Slf4j
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

    @Autowired
    WordBookRelationServiceImpl wordBookRelationService;

    /**
     * 添加单独的单词信息
     *
     * @param words 单词信息
     * @return status
     */
    @RequestMapping("/addWord")
    @ResponseBody
    public ResultInfo<String> addWord(@Validated Words words) {
        QueryWrapper<Words> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("japaneseMeans", words.getJapaneseMeans());
        boolean save = wordsService.saveOrUpdate(words, queryWrapper);
        if (save) {
            return new ResultInfo().success(HttpStatus.OK.value(), "添加成功");
        } else {
            return new ResultInfo().success(HttpStatus.BAD_REQUEST.value(), "添加失败");
        }
    }

    /**
     * /addWord/addWordAndSentence
     * 添加完整的单词，包括短语和例句
     *
     * @param words 完整的单词信息
     * @return status
     */
    @RequestMapping("/addWordAndSentence")
    @ResponseBody
    public ResultInfo<String> addWordAndSentence(@RequestBody @Validated WordVo words) {
        log.info(words.toString());
        StringBuilder message = new StringBuilder();
        Words word = new Words();
        word.setChineseMeans(words.getChineseMeans());
        word.setEnglishMeans(words.getEnglishMeans());
        word.setJapaneseMeans(words.getJapaneseMeans());
        word.setVoice(words.getVoice());
        word.setVoiceUrl(words.getVoiceUrl());
        word.setFalseName(words.getFalseName());
        QueryWrapper<Words> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("japaneseMeans", word.getJapaneseMeans());
        wordsService.saveOrUpdate(word, queryWrapper);
        Words one = wordsService.getOne(queryWrapper);
        message.append("word add success");
        // 存入单词与词书的关系
        WordBookRelation wordBookRelation = new WordBookRelation();
        wordBookRelation.setWordID(one.getWordID());
        wordBookRelation.setWordBookID(words.getWordBookID());
        log.info(wordBookRelation.toString());
        QueryWrapper<WordBookRelation> wordBookRelationQueryWrapper = new QueryWrapper<>();
        wordBookRelationQueryWrapper.eq("wordID",one.getWordID());
        wordBookRelationQueryWrapper.eq("wordBookID", words.getWordBookID());
        wordBookRelationService.saveOrUpdate(wordBookRelation,wordBookRelationQueryWrapper);
        // 存入单词的例句
        if (words.getSentence() != null) {
            words.getSentence().forEach((sentences) -> {
                sentences.setKind(2);
                UpdateWrapper<Sentences> sentencesUpdateWrapper = new UpdateWrapper<>();
                sentencesUpdateWrapper.eq("japaneseMeans", sentences.getJapaneseMeans());
                sentencesService.saveOrUpdate(sentences, sentencesUpdateWrapper);
                Sentences one1 = sentencesService.getOne(sentencesUpdateWrapper);
                SentencesRelaction sentencesRelaction = new SentencesRelaction();
                sentencesRelaction.setSentenceID(one1.getSentenceID());
                sentencesRelaction.setWordID(one.getWordID());
                sentencesRelaction.setStandby1(sentences.getStandby1());
                sentencesRelactionService.saveOrUpdate(sentencesRelaction);
            });
        }

        if(words.getPhrase() != null) {
            // 存入单词的短语
            words.getPhrase().forEach((sentences) -> {
                sentences.setKind(1);
                UpdateWrapper<Sentences> sentencesUpdateWrapper = new UpdateWrapper<>();
                sentencesUpdateWrapper.eq("japaneseMeans", sentences.getJapaneseMeans());
                sentencesService.saveOrUpdate(sentences, sentencesUpdateWrapper);
                Sentences one1 = sentencesService.getOne(sentencesUpdateWrapper);
                SentencesRelaction sentencesRelaction = new SentencesRelaction();
                sentencesRelaction.setSentenceID(one1.getSentenceID());
                sentencesRelaction.setWordID(one.getWordID());
                sentencesRelaction.setStandby1(sentences.getStandby1());
                sentencesRelactionService.saveOrUpdate(sentencesRelaction);
            });
        }
        return new ResultInfo().success(HttpStatus.OK.value(), message.toString());
    }

    /**
     * 获取需要学习的单词
     *
     * @param user 用户
     * @return 单词
     */
    @RequestMapping("/getNotStudyWords")
    @ResponseBody
    public ResultInfo<List<WordVo>> getNotStudyWords(@Validated UserVo user) {
        QueryWrapper<UserNotStudyWordRecord> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("userID", user.getUserID());
        queryWrapper.eq("status", 1);
        IPage<UserNotStudyWordRecord> notStudy = new Page<>(user.getCurrent(), user.getSize());
        userNotStudyWordRecordService.page(notStudy, queryWrapper);
        List<WordVo> res = new ArrayList<>();
//        for(UserNotStudyWordRecord words: notStudy.getRecords()) {
//
//        }
        notStudy.getRecords().forEach((words) -> {
            WordVo subRes = new WordVo();
            List<Sentences> sentencesList = new LinkedList<>();
            List<Sentences> phraseList = new LinkedList<>();
            QueryWrapper<Words> wordsQueryWrapper = new QueryWrapper<>();
            wordsQueryWrapper.eq("wordID", words.getWordID());
            Words words1 = wordsService.getOne(wordsQueryWrapper);
            QueryWrapper<SentencesRelaction> sentencesRelactionQueryWrapper = new QueryWrapper<>();
            sentencesRelactionQueryWrapper.eq("wordID", words1.getWordID());
            List<SentencesRelaction> list = sentencesRelactionService.list(sentencesRelactionQueryWrapper);
            list.forEach((sr) -> {
                QueryWrapper<Sentences> sentencesQueryWrapper = new QueryWrapper<>();
                sentencesQueryWrapper.eq("sentenceID", sr.getSentenceID());
                Sentences sentences = sentencesService.getOne(sentencesQueryWrapper);
                if (sentences.getKind() == 1) {
                    phraseList.add(sentences);
                } else if (sentences.getKind() == 2) {
                    sentencesList.add(sentences);
                }
            });
            setWordsVo(subRes, words1);
            subRes.setSentence(sentencesList);
            subRes.setPhrase(phraseList);
            subRes.setCount(words.getIsStudy());
            wordOption wordOption = new wordOption(words1.getJapaneseMeans(), words1.getFalseName(), words1.getChineseMeans(), words1.getEnglishMeans());
            List<wordOption> options = getOptions(words1.getJapaneseMeans());
            options.add(new Random().nextInt(options.size()), wordOption);
            subRes.setOptions(options);
            res.add(subRes);
        });
        return new ResultInfo().success(HttpStatus.OK.value(), "OK", res);
    }

    /**
     * 获取需要学习的单词数量
     *
     * @param userVo 用户信息
     * @return status
     */
    @RequestMapping("/getNotStudyRecordCount")
    @ResponseBody
    public ResultInfo<Integer> getNotStudyRecordCount(@Validated UserVo userVo) {
        QueryWrapper<UserNotStudyWordRecord> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("userID", userVo.getUserID());
        queryWrapper.eq("status", 1);
        Integer count = Math.toIntExact(userNotStudyWordRecordService.count(queryWrapper));
        return new ResultInfo<Integer>().success(HttpStatus.OK.value(), "查询需要学习的单词总数成功", count);
    }

    /**
     * 获取需要复习的单词数量
     *
     * @param userVo 用户信息
     * @return status
     */
    @RequestMapping("/getStudyRecordCount")
    @ResponseBody
    public ResultInfo<Integer> getStudyRecordCount(@Validated UserVo userVo) {
        QueryWrapper<UserStudyWordRecord> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("userID", userVo.getUserID());
        queryWrapper.eq("status", 1);
        Integer count = Math.toIntExact(userStudyWordRecordService.count(queryWrapper));
        return new ResultInfo<Integer>().success(HttpStatus.OK.value(), "查询需要复习的单词总数成功", count);
    }

    /**
     * 获取需要复习的单词
     *
     * @param user 用户信息
     * @return 单词
     */
    @RequestMapping("/getStudyWords")
    @ResponseBody
    public ResultInfo<List<WordVo>> getStudyWords(@Validated UserVo user) {
        QueryWrapper<UserStudyWordRecord> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("userID", user.getUserID());
        queryWrapper.eq("status", 1);
        List<String> review = Common.getDateReview();
        for (int i = 0; i < review.size(); i++) {
            queryWrapper.or().eq("studyTime", review.get(i)).eq("studyWordCount", i);
        }
        IPage<UserStudyWordRecord> notStudy = new Page<>(user.getCurrent(), user.getSize());
        userStudyWordRecordService.page(notStudy, queryWrapper);
        List<WordVo> res = new ArrayList<>();

        notStudy.getRecords().forEach((words) -> {
            WordVo subRes = new WordVo();
            List<Sentences> sentencesList = new LinkedList<>();
            List<Sentences> phraseList = new LinkedList<>();
            QueryWrapper<Words> wordsQueryWrapper = new QueryWrapper<>();
            wordsQueryWrapper.eq("wordID", words.getWordID());
            Words words1 = wordsService.getOne(wordsQueryWrapper);
            QueryWrapper<SentencesRelaction> sentencesRelactionQueryWrapper = new QueryWrapper<>();
            sentencesRelactionQueryWrapper.eq("wordID", words1.getWordID());
            List<SentencesRelaction> list = sentencesRelactionService.list(sentencesRelactionQueryWrapper);
            list.forEach((sr) -> {
                QueryWrapper<Sentences> sentencesQueryWrapper = new QueryWrapper<>();
                sentencesQueryWrapper.eq("sentenceID", sr.getSentenceID());
                Sentences sentences = sentencesService.getOne(sentencesQueryWrapper);
                if (sentences.getKind() == 1) {
                    phraseList.add(sentences);
                } else if (sentences.getKind() == 2) {
                    sentencesList.add(sentences);
                }
            });
            setWordsVo(subRes, words1);
            subRes.setSentence(sentencesList);
            subRes.setPhrase(phraseList);
            res.add(subRes);
        });
        return new ResultInfo().success(HttpStatus.OK.value(), "OK", res);
    }

    /**
     * 学习完单词后添加到学习记录中，并且修改未学习标记
     * 会清除复习的历史次数，只有当复习错误时或者第一次存入调用
     *
     * @param studyRecordVo 单词信息
     * @return status
     */
    @RequestMapping("/addStudyRecord")
    @ResponseBody
    public ResultInfo<String> addStudyRecord(@Validated StudyRecordVo studyRecordVo) {
        UserStudyWordRecord userStudyWordRecord = new UserStudyWordRecord();
        userStudyWordRecord.setWordID(studyRecordVo.getWordID());
        userStudyWordRecord.setUserID(studyRecordVo.getUserID());
        userStudyWordRecord.setStudyTime(Common.getDateYearMouthDay());
        userStudyWordRecordService.saveOrUpdate(userStudyWordRecord);

        // 更新未学单词表
        UserNotStudyWordRecord userNotStudyWordRecord = new UserNotStudyWordRecord();
        QueryWrapper<UserNotStudyWordRecord> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("wordID", studyRecordVo.getWordID());
        queryWrapper.eq("userID", studyRecordVo.getUserID());
        queryWrapper.eq("status", 1);
        userNotStudyWordRecord.setWordID(studyRecordVo.getWordID());
        userNotStudyWordRecord.setUserID(studyRecordVo.getWordID());
        userNotStudyWordRecord.setStatus(2);
        userNotStudyWordRecordService.saveOrUpdate(userNotStudyWordRecord, queryWrapper);
        return new ResultInfo<String>().success(HttpStatus.OK.value(), "复习记录添加成功 and 删除未学习表当前单词");
    }

    /**
     * 复习完成的添加，会修改次数
     *
     * @param studyRecordVo 单词用户信息
     * @return status
     */
    @RequestMapping("/updateStudyRecord")
    @ResponseBody
    public ResultInfo<String> updateStudyRecord(@Validated StudyRecordVo studyRecordVo) {
        QueryWrapper<UserStudyWordRecord> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("userID", studyRecordVo.getUserID());
        queryWrapper.eq("wordID", studyRecordVo.getWordID());
        UserStudyWordRecord userStudyWordRecordServiceOne = userStudyWordRecordService.getOne(queryWrapper);
        UserStudyWordRecord userStudyWordRecord = new UserStudyWordRecord();
        userStudyWordRecord.setWordID(studyRecordVo.getWordID());
        userStudyWordRecord.setUserID(studyRecordVo.getUserID());
        userStudyWordRecord.setStudyWordCount(userStudyWordRecordServiceOne.getStudyWordCount() + 1);
        userStudyWordRecord.setStudyTime(Common.getDateYearMouthDay());
        userStudyWordRecordService.saveOrUpdate(userStudyWordRecord);
        return new ResultInfo<String>().success(HttpStatus.OK.value(), "复习记录添加成功");
    }

    /**
     * 初始化 需要学习的单词表
     *
     * @param studyRecordVo
     * @return
     */
    @RequestMapping("/addNotStudyRecord")
    @ResponseBody
    public ResultInfo<String> addNotStudyRecord(@Validated StudyRecordVo studyRecordVo) {
        UserNotStudyWordRecord userNotStudyWordRecord = new UserNotStudyWordRecord();
        userNotStudyWordRecord.setWordID(studyRecordVo.getWordID());
        userNotStudyWordRecord.setUserID(studyRecordVo.getUserID());
        userNotStudyWordRecord.setIsStudy(studyRecordVo.getIsStudy());
        userNotStudyWordRecordService.saveOrUpdate(userNotStudyWordRecord);
        return new ResultInfo<String>().success(HttpStatus.OK.value(), "未学习完成的单词添加成功");
    }

    /**
     * 从词书初始化需要学习的单词
     * 会清除上一本词书单词
     *
     * @param bookAndUserVo 词书和用户信息
     * @return status
     */
    @RequestMapping("/initNotStudyRecordFromBook")
    @ResponseBody
    public ResultInfo<String> initNotStudyRecordFromBook(@Validated BookAndUserVo bookAndUserVo) {
        QueryWrapper<UserNotStudyWordRecord> userNotStudyWordRecordQueryWrapper = new QueryWrapper<>();
//        userNotStudyWordRecordQueryWrapper.eq("status", 1);
//        userNotStudyWordRecordQueryWrapper.or().eq("status", 2);
        userNotStudyWordRecordService.remove(userNotStudyWordRecordQueryWrapper);
        QueryWrapper<WordBookRelation> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("wordBookID", bookAndUserVo.getWordBookID());
        List<WordBookRelation> list = wordBookRelationService.list(queryWrapper);
        for (WordBookRelation w : list) {
            UserNotStudyWordRecord userNotStudyWordRecord = new UserNotStudyWordRecord();
            userNotStudyWordRecord.setWordID(w.getWordID());
            userNotStudyWordRecord.setUserID(bookAndUserVo.getUserID());
            userNotStudyWordRecordService.saveOrUpdate(userNotStudyWordRecord);
        }
        return new ResultInfo<String>().success(HttpStatus.OK.value(), "未学习的单词初始化成功");
    }

    public void setWordsVo(WordVo wordsVo, Words words) {
        wordsVo.setChineseMeans(words.getChineseMeans());
        wordsVo.setEnglishMeans(words.getEnglishMeans());
        wordsVo.setJapaneseMeans(words.getJapaneseMeans());
        wordsVo.setVoice(words.getVoice());
        wordsVo.setVoiceUrl(words.getVoiceUrl());
        wordsVo.setFalseName(words.getFalseName());
        wordsVo.setWordID(words.getWordID());
    }

    public List<wordOption> getOptions(String word) {
        List<wordOption> res = new LinkedList<>();
        QueryWrapper<Words> queryWrapper = new QueryWrapper<>();
        for (int i = 0; i < word.length(); i++) {
            String sub = word.substring(i, word.length());
            queryWrapper.likeRight("japaneseMeans", sub);
            List<Words> list = wordsService.list(queryWrapper);
            for (Words w : list) {
                if (res.size() >= 3) {
                    break;
                }
                res.add(new wordOption(w.getJapaneseMeans(), w.getFalseName(), w.getChineseMeans(), w.getEnglishMeans()));
            }
        }
        return res;
    }
}
