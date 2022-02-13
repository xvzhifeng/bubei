package com.sumu.bubei.models.res.controller;

import com.sumu.bubei.models.res.entity.BackgroundPicture;
import com.sumu.bubei.models.res.service.PictureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author sumu
 * @date 2022/2/13 0:54
 */
@Slf4j
@RestController
@RequestMapping("/res")
public class PictureController {

    @Autowired
    PictureService pictureService;

    @RequestMapping("/latestBackgroundPic")
    public BackgroundPicture getBackgroundPicture() {
        return pictureService.getBackgroundPicture();
    }

}
