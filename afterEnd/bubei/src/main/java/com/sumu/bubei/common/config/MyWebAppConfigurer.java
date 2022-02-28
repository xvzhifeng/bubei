package com.sumu.bubei.common.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @Description 资源映射路径
 * @Date Created in 00:22 2021/12/20
 * @Created by XZF
 **/
@Configuration
public class MyWebAppConfigurer implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String projectPath = System.getProperty("user.dir");
        registry.addResourceHandler("/upload/**").addResourceLocations("file:" + projectPath+"/upload/");
    }
}
