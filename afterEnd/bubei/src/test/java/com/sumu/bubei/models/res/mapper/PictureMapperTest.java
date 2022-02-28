package com.sumu.bubei.models.res.mapper;

import com.sumu.bubei.models.res.entity.BackgroundPicture;
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
        BackgroundPicture backgroundPicture = new BackgroundPicture(1,"test","123");
        pictureMapper.getOneBackgroundPicture();
//        pictureMapper.insert(backgroundPicture);
    }
}