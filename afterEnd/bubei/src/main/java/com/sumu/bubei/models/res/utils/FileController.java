package com.sumu.bubei.models.res.utils;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.fasterxml.jackson.core.JsonParser;
import com.sumu.bubei.common.rest.entity.ResultInfo;
import com.sumu.bubei.common.utils.HttpUtil;
import com.sumu.bubei.models.res.entity.BackgroundImage;
import com.sumu.bubei.models.res.entity.git.FromData;
import com.sumu.bubei.models.res.entity.git.GitUploadFile;
import com.sumu.bubei.models.res.entity.vo.VoiceMp3Vo;
import com.sumu.bubei.models.res.service.impl.BackgroundImageServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.*;

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
        // 部署成jar时，不能加最前面的/
        // modelAndView.setViewName("/res/backgroundImage/uploadFile");
        modelAndView.setViewName("res/backgroundImage/uploadFile");
        return modelAndView;
    }

    /**
     * url: /res/util/uploadMp3
     * @param voiceMp3Vo 音频文件
     * @return 音频文件url
     */
    @RequestMapping("/uploadMp3")
    @ResponseBody
    public ResultInfo uploadMp3(VoiceMp3Vo voiceMp3Vo) {
        log.info(voiceMp3Vo.toString());
        String url = uploadGit(voiceMp3Vo.getBase64(), voiceMp3Vo.getFileName(), ".mp3");
        log.info(url);
        return new ResultInfo().success(HttpStatus.OK.value(),"音频文件上传到git成功",url);
    }

    @PostMapping(value = "/uploadFile")
    public ModelAndView fileUpload(@RequestParam(value = "file") MultipartFile file, String name, ModelAndView modelAndView, HttpServletRequest request) throws IOException {
        if (file.isEmpty()) {
            log.info("文件为空");
            modelAndView.addObject("msg", "上传的文件为空，请重新上传！");
            modelAndView.setViewName("res/backgroundImage/uploadFile");
            return modelAndView;
        }
        byte[] bytes = file.getBytes();
        Base64.Encoder encoder = Base64.getEncoder();
        String base64 = encoder.encodeToString(bytes);
        String fileName = file.getOriginalFilename();  // 文件名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));  // 后缀名
        String url = uploadGit(base64, name, suffixName);
        String img = "data:image/" + suffixName.replace(".", "") + ";base64," + base64;
        HttpSession session = request.getSession();
        session.setAttribute("BackgroundImageBase64", img);
        modelAndView.addObject("msg", "上传的成功！");
        modelAndView.addObject("url",url);
        modelAndView.setViewName("res/backgroundImage/uploadFile");
        BackgroundImage backgroundImage = new BackgroundImage();
//        backgroundImage.setBase64(img);
        backgroundImage.setStandby1(name);
        backgroundImage.setUrl(url);
        backgroundImageService.insertOne(backgroundImage);
        return modelAndView;
    }

    /**
     *  当图片大于1m时，需要登录gitee才能查看
     * @param content base64 的文件
     * @param name 文件别名
     * @param suffixName 文件后缀
     * @return 图片的url地址
     */
    public String uploadGit(String content, String name, String suffixName){
        GitUploadFile gitUploadFile = new GitUploadFile();
        gitUploadFile.init();
        gitUploadFile.setPath(gitUploadFile.getPath() + suffixName);
        gitUploadFile.getFromData().setContent(content);
        gitUploadFile.getFromData().setMessage("upload " + name);
        String parameter = JSON.toJSONString(gitUploadFile.getFromData());

        try {
            String responseJson = HttpUtil.doPostJsonHttps(gitUploadFile.getRequestUrl(), parameter);
            Map<String, Map<String,String>> result = JSON.parseObject(responseJson, new TypeReference<Map<String, Map<String,String>>>(){});
            if (result != null) {
                Set<Map.Entry<String, Map<String,String>>> entries = result.entrySet();
                for(Map.Entry<String, Map<String,String>> entry : entries) {
                    log.info(entry.getKey()+" "+entry.getValue());
                }
                log.info(result.get("content").get("download_url"));
                return result.get("content").get("download_url");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
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
            log.debug("图片存入到本地 "+fileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

