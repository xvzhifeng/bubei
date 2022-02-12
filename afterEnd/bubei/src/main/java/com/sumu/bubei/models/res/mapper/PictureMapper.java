package com.sumu.bubei.models.res.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.sumu.bubei.models.res.entity.BackgroundPicture;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * @author sumu
 * @date 2022/2/13 1:14
 */
@Repository
public interface PictureMapper extends BaseMapper<BackgroundPicture> {

    /**
     *
     * @return 当数据库最新的一张背景图
     */
    BackgroundPicture getOneBackgroundPicture();
}
