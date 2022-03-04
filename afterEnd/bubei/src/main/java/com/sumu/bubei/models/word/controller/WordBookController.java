package com.sumu.bubei.models.word.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.sumu.bubei.common.rest.entity.ResultInfo;
import com.sumu.bubei.models.word.entity.UserNotStudyWordRecord;
import com.sumu.bubei.models.word.entity.WordBook;
import com.sumu.bubei.models.word.entity.WordBookRelation;
import com.sumu.bubei.models.word.entity.Words;
import com.sumu.bubei.models.word.entity.vo.WordBookAndUserV0;
import com.sumu.bubei.models.word.entity.vo.WordBookCountInfoVo;
import com.sumu.bubei.models.word.entity.vo.wordBookSectionVo;
import com.sumu.bubei.models.word.service.impl.UserNotStudyWordRecordServiceImpl;
import com.sumu.bubei.models.word.service.impl.WordBookRelationServiceImpl;
import com.sumu.bubei.models.word.service.impl.WordBookServiceImpl;
import com.sumu.bubei.models.word.service.impl.WordsServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author sumu
 * @since 2022-02-13
 */
@RestController
@RequestMapping("/word-book")
@CrossOrigin
@Slf4j
public class WordBookController {

    @Autowired
    WordBookServiceImpl wordBookService;
    @Autowired
    WordsServiceImpl wordsService;
    @Autowired
    UserNotStudyWordRecordServiceImpl userNotStudyWordRecordService;
    @Autowired
    WordBookRelationServiceImpl wordBookRelationService;

    @RequestMapping("/getWordBookInfo")
    @ResponseBody
    public ResultInfo getWordBookInfo(WordBookAndUserV0 word) {
        log.info(word.toString());
        QueryWrapper<WordBook> wordBookQueryWrapper = new QueryWrapper<>();
        wordBookQueryWrapper.eq("wordBookID", word.getWordBookID());
        WordBook bookServiceOne = wordBookService.getOne(wordBookQueryWrapper);
        WordBookAndUserV0 wordBookAndUserV0 = new WordBookAndUserV0();
        wordBookAndUserV0.setWordBookID(bookServiceOne.getWordBookID());
        wordBookAndUserV0.setWordBookName(bookServiceOne.getWordBookName());
        wordBookAndUserV0.setWordBookLabel(bookServiceOne.getWordBookLabel());
        wordBookAndUserV0.setWordBookKind(bookServiceOne.getWordBookKind());
        QueryWrapper<WordBookRelation> wordsQueryWrapper = new QueryWrapper<>();
        wordsQueryWrapper.eq("wordBookID",bookServiceOne.getWordBookID());
        wordBookAndUserV0.setCount((int) wordBookRelationService.count(wordsQueryWrapper));
        QueryWrapper<UserNotStudyWordRecord> userNotStudyWordRecordQueryWrapper = new QueryWrapper<>();
        userNotStudyWordRecordQueryWrapper.eq("userID", word.getUserID());
        userNotStudyWordRecordQueryWrapper.eq("status",2);
        wordBookAndUserV0.setLearnCount((int) userNotStudyWordRecordService.count(userNotStudyWordRecordQueryWrapper));
        return new ResultInfo().success(HttpStatus.OK.value(),"获取词书成功",wordBookAndUserV0);
    }

    /**
     * 获取所有的词书信息，以及当前词书一共的单词数量
     * @return
     */
    @RequestMapping("/getAllWordBook")
    @ResponseBody
    public ResultInfo getAllWordBook(){
        List<WordBookCountInfoVo> ans = new ArrayList<>();
        List<WordBook> list = wordBookService.list();
        list.forEach((l)->{
            WordBookCountInfoVo wordBookCountInfoVo = new WordBookCountInfoVo();
            wordBookCountInfoVo.setWordBookID(l.getWordBookID());
            wordBookCountInfoVo.setWordBookName(l.getWordBookName());
            wordBookCountInfoVo.setWordBookKind(l.getWordBookKind());
            wordBookCountInfoVo.setWordBookLabel(l.getWordBookLabel());
            QueryWrapper<WordBookRelation> wordBookRelationQueryWrapper = new QueryWrapper<>();
            wordBookRelationQueryWrapper.eq("wordBookID", l.getWordBookID());
            wordBookCountInfoVo.setCount((int) wordBookRelationService.count(wordBookRelationQueryWrapper));
        });
        return new ResultInfo().success(HttpStatus.OK.value(), "获取所有词书",list);
    }

    /**
     * 获取词书的section信息
     * @param word
     * @return
     */
    @RequestMapping("/getWordBookSectionList")
    @ResponseBody
    public ResultInfo getWordBookSectionList(WordBookAndUserV0 word) {
        log.info(word.toString());
        List<wordBookSectionVo> res = new ArrayList<>();
        res = wordBookRelationService.getWordBookSectionList(word.getWordBookID());
        res.forEach((section)->{
            QueryWrapper<WordBookRelation> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("wordBookID", word.getWordBookID());
            queryWrapper.eq("standby1",section.getName());
            section.setCount((int) wordBookRelationService.count(queryWrapper));
        });
        return new ResultInfo().success(HttpStatus.OK.value(),"查询单词章节信息成功!",res);
    }


    /**
     * 查询章节单词信息
     * @param word
     * @return
     */
    @RequestMapping("/getWordBookSectionWordList")
    @ResponseBody
    public ResultInfo getWordBookSectionWordList(WordBookAndUserV0 word) {
        log.debug(word.toString());
        QueryWrapper<WordBookRelation> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("wordBookID", word.getWordBookID());
        queryWrapper.eq("standby1",word.getWordSection());
        List<WordBookRelation> list = wordBookRelationService.list(queryWrapper);
        List<Words> wordsList = new ArrayList<>();
        list.forEach((w)->{
            QueryWrapper<Words> queryWrapper1 = new QueryWrapper<>();
            queryWrapper1.eq("wordID",w.getWordID());
            wordsList.add(wordsService.getOne(queryWrapper1));
        });
        return new ResultInfo().success(HttpStatus.OK.value(),"查询章节单词信息成功!",wordsList);
    }
}
