package com.sumu.bubei.models.res.service;

import com.sumu.bubei.models.res.entity.BackgroundPicture;
import org.springframework.stereotype.Service;

/**
 * @author sumu
 * @date 2022/2/13 1:14
 */
@Service
public interface PictureService {
    public BackgroundPicture getBackgroundPicture();
}
