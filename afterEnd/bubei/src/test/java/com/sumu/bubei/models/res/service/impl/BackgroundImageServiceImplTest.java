package com.sumu.bubei.models.res.service.impl;

import com.sumu.bubei.models.res.entity.BackgroundImage;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

/**
 * @author sumu
 * @date 2022/2/13 17:57
 */
@SpringBootTest
class BackgroundImageServiceImplTest {

    @Autowired
    BackgroundImageServiceImpl backgroundImageService;
    @Test
    void insertOne() {
        BackgroundImage backgroundImage = new BackgroundImage();
        backgroundImage.setUrl("test");
        backgroundImage.setBase64("test");
        backgroundImageService.insertOne(backgroundImage);
    }
}