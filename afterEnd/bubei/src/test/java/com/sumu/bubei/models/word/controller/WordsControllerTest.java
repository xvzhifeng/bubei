package com.sumu.bubei.models.word.controller;

import com.sumu.bubei.models.word.entity.vo.WordOption;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class WordsControllerTest {

    @Autowired
    WordsController wordsController;

    @Test
    void getOptions() {
        WordOption wordOption = new WordOption();
        wordsController.getOptions(wordOption);
    }
}