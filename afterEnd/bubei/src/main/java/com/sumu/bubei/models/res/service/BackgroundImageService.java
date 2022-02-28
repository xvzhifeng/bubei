package com.sumu.bubei.models.res.service;

import com.sumu.bubei.models.res.entity.BackgroundImage;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author sumu
 * @since 2022-02-13
 */

public interface BackgroundImageService extends IService<BackgroundImage> {

    boolean insertOne(BackgroundImage backgroundImage);
}
