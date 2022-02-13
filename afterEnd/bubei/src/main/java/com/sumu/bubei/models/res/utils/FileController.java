package com.sumu.bubei.models.res.utils;


import com.sumu.bubei.models.res.entity.BackgroundImage;
import com.sumu.bubei.models.res.service.impl.BackgroundImageServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.Base64;
import java.util.UUID;

/**
 * @Description 文件上传
 * @Date Created in 23:06 2021/12/19
 * @Created by XZF
 **/

@Slf4j
@RestController
@RequestMapping("/res/util")
public class FileController {

    @Autowired
    BackgroundImageServiceImpl backgroundImageService;
    @GetMapping(value = "/file")
    public ModelAndView file(ModelAndView modelAndView) {
        modelAndView.setViewName("/res/backgroundImage/uploadFile");
        return modelAndView;
    }

    @PostMapping(value = "/uploadFile")
    public ModelAndView fileUpload(@RequestParam(value = "file") MultipartFile file,String url, ModelAndView modelAndView, HttpServletRequest request) throws IOException {
        if (file.isEmpty()) {
            log.info("文件为空");
            modelAndView.addObject("msg", "上传的文件为空，请重新上传！");
            modelAndView.setViewName("/res/backgroundImage/uploadFile");
            return modelAndView;
        }
        byte[] bytes = file.getBytes();
        Base64.Encoder encoder = Base64.getEncoder();
        String s = encoder.encodeToString(bytes);
        String fileName = file.getOriginalFilename();  // 文件名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));  // 后缀名
        String img = "data:image/" + suffixName.replace(".","") + ";base64,"+s;
        HttpSession session = request.getSession();
        session.setAttribute("BackgroundImageBase64",img);
        modelAndView.addObject("msg", "上传的成功！");
        modelAndView.setViewName("/res/backgroundImage/uploadFile");
        BackgroundImage backgroundImage = new BackgroundImage();
        backgroundImage.setBase64(img);
        backgroundImage.setUrl(url);
        backgroundImageService.insertOne(backgroundImage);
        return modelAndView;
    }

    public void fileToLocal(MultipartFile file) {
        String projectPath = System.getProperty("user.dir") + "/upload/img/"; // 上传后的路径
        String fileName = file.getOriginalFilename();  // 文件名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));  // 后缀名
        fileName = UUID.randomUUID() + suffixName; // 新文件名
        File dest = new File(projectPath + fileName);
        if (!dest.getParentFile().exists()) {
            dest.getParentFile().mkdirs();
        }
        try {
            file.transferTo(dest);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

