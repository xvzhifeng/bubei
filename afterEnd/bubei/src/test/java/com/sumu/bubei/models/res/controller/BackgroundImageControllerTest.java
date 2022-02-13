package com.sumu.bubei.models.res.controller;

import com.sumu.bubei.common.rest.entity.ResultInfo;
import com.sumu.bubei.models.res.entity.BackgroundImage;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

/**
 * @author sumu
 * @date 2022/2/13 17:21
 */
@SpringBootTest
class BackgroundImageControllerTest {

    @Autowired
    BackgroundImageController backgroundImageController;
    @Test
    void uploadBackgroundImage() {
        BackgroundImage backgroundImage = new BackgroundImage();
        backgroundImage.setBase64("test");
        ResultInfo resultInfo = backgroundImageController.uploadBackgroundImage(backgroundImage);
        System.out.println(resultInfo);
    }
}