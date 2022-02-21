package com.sumu.bubei.models.word.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.sumu.bubei.common.rest.entity.ResultInfo;
import com.sumu.bubei.models.word.entity.UserNotStudyWordRecord;
import com.sumu.bubei.models.word.entity.WordBook;
import com.sumu.bubei.models.word.entity.WordBookRelation;
import com.sumu.bubei.models.word.entity.Words;
import com.sumu.bubei.models.word.entity.vo.WordBookAndUserV0;
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
        return new ResultInfo().success(HttpStatus.OK.value(),"获取词书成功",bookServiceOne);

    }

    @RequestMapping("/getAllWordBook")
    @ResponseBody
    public ResultInfo getAllWordBook(){
        List<WordBook> list = wordBookService.list();
        return new ResultInfo().success(HttpStatus.OK.value(), "获取所有词书",list);
    }
}
