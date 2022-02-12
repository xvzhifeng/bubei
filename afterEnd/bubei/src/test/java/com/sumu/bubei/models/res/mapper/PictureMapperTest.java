package com.sumu.bubei.models.res.mapper;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

/**
 * @author sumu
 * @date 2022/2/13 2:49
 */
@SpringBootTest
class PictureMapperTest {

    @Autowired
    PictureMapper pictureMapper;
    @Test
    void getOneBackgroundPicture() {
//        pictureMapper.selectList(null).forEach(System.out::println);
        pictureMapper.getOneBackgroundPicture();
    }
}