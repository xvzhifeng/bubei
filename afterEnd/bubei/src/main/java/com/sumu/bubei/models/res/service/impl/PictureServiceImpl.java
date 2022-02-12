package com.sumu.bubei.models.res.service.impl;

import com.sumu.bubei.models.res.entity.BackgroundPicture;
import com.sumu.bubei.models.res.mapper.PictureMapper;
import com.sumu.bubei.models.res.service.PictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author sumu
 * @date 2022/2/13 1:15
 */
@Service
public class PictureServiceImpl implements PictureService {

    @Autowired
    PictureMapper pictureMapper;

    @Override
    public BackgroundPicture getBackgroundPicture() {
        return pictureMapper.getOneBackgroundPicture();
    }
}
