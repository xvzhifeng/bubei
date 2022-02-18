package com.sumu.bubei.models.login.controller;

import io.github.biezhi.ome.OhMyEmail;
import io.github.biezhi.ome.SendMailException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import static io.github.biezhi.ome.OhMyEmail.SMTP_163;

/**
 * @Description
 * @Date Created in 01:42 2022/1/31
 * @Created by XZF
 **/
@Slf4j
@RestController
@RequestMapping("/login/email")
// 解决跨域
@CrossOrigin
public class EmailController {


        @ResponseBody
        @RequestMapping("/text")
        public Map<String,String> sendText(String email, HttpServletRequest request) {

            OhMyEmail.config(SMTP_163(true), "sumuTest@163.com", "ZKZSUBJTKCPSUXFA");
            String sources = "0123456789TEST"; // 加上一些字母，就可以生成pc站的验证码了
            Random rand = new Random();
            StringBuffer code = new StringBuffer();
            Map<String,String> res = new HashMap<>();
            for (int j = 0; j < 6; j++) {
                code.append(sources.charAt(rand.nextInt(9)) + "");
            }
            try {
                OhMyEmail.subject("不背日语")
                        .from("sumuTest@163.com")
                        .to(email)
                        .text(code.toString())
                        .send();
            } catch (SendMailException e) {
                log.info(e.getStackTrace().toString());
                res.put("error","send failed");
                return res;
            }
            res.put("code",code.toString());
            return res;
        }
    }

