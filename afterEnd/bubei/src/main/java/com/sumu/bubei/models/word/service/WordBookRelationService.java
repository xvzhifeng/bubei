package com.sumu.bubei.models.word.service;

import com.sumu.bubei.models.word.entity.WordBookRelation;
import com.baomidou.mybatisplus.extension.service.IService;
import com.sumu.bubei.models.word.entity.vo.wordBookSectionVo;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author sumu
 * @since 2022-02-13
 */
public interface WordBookRelationService extends IService<WordBookRelation> {
    public List<wordBookSectionVo> getWordBookSectionList(int wordBookID);
}
