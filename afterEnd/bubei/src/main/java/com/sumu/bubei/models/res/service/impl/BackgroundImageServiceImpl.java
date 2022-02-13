package com.sumu.bubei.models.res.service.impl;

import com.sumu.bubei.models.res.entity.BackgroundImage;
import com.sumu.bubei.models.res.mapper.BackgroundImageMapper;
import com.sumu.bubei.models.res.service.BackgroundImageService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author sumu
 * @since 2022-02-13
 */
@Service
public class BackgroundImageServiceImpl extends ServiceImpl<BackgroundImageMapper, BackgroundImage> implements BackgroundImageService {

    @Autowired
    BackgroundImageMapper backgroundImageMapper;

    @Override
    public boolean insertOne(BackgroundImage backgroundImage) {
        return backgroundImageMapper.insert(backgroundImage) > 0;
    }
}
