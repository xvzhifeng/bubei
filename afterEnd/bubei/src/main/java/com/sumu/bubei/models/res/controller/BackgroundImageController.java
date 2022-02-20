package com.sumu.bubei.models.res.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.sumu.bubei.common.rest.entity.BaseReturn;
import com.sumu.bubei.common.rest.entity.ResultInfo;
import com.sumu.bubei.models.res.entity.BackgroundImage;
import com.sumu.bubei.models.res.entity.BackgroundPicture;
import com.sumu.bubei.models.res.service.BackgroundImageService;
import com.sumu.bubei.models.res.service.impl.BackgroundImageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
@RequestMapping("/background-image")
@Validated
@CrossOrigin
public class BackgroundImageController {

    @Autowired
    BackgroundImageServiceImpl backgroundImageService;

    @RequestMapping("/upload")
    @ResponseBody
    public ResultInfo uploadBackgroundImage(@Validated BackgroundImage backgroundImage) {
        boolean insertFlag = backgroundImageService.insertOne(backgroundImage);
        if (insertFlag) {
            return new ResultInfo().success(HttpStatus.OK.value(), "上传成功");
        } else {
            return new ResultInfo().success(HttpStatus.BAD_REQUEST.value(), "上传失败");
        }
    }

    @RequestMapping("/getImage")
    @ResponseBody
    public IPage<BackgroundImage> getBackgroundImage(long current,long size) {
        QueryWrapper<BackgroundImage> queryWrapper = new QueryWrapper<>();
        queryWrapper.ne("url","");
        queryWrapper.isNotNull("url");
        IPage<BackgroundImage> page = new Page<>(current,size);
        backgroundImageService.page(page,queryWrapper);
//        page.getRecords().forEach(System.out::println);
        return page;
    }

    @RequestMapping("/getBK")
    @ResponseBody
    public BackgroundPicture getBK(){
        QueryWrapper<BackgroundImage> queryWrapper = new QueryWrapper<>();
        queryWrapper.ne("url","");
        queryWrapper.isNotNull("url");
        queryWrapper.orderByDesc("updateTime");
        List<BackgroundImage> list = backgroundImageService.list(queryWrapper);
        BackgroundPicture res = new BackgroundPicture();
        res.setUrl(list.get(0).getUrl());
        return res;
    }

}
