package com.sumu.bubei;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.sumu.bubei.models.res.mapper")
@MapperScan("com.sumu.bubei.models")
@SpringBootApplication
public class BubeiApplication {

    public static void  main(String[] args) {
        SpringApplication.run(BubeiApplication.class, args);
    }

}
