package com.sumu.bubei.models.word.service.impl;

import com.sumu.bubei.models.word.entity.WordBookRelation;
import com.sumu.bubei.models.word.entity.vo.wordBookSectionVo;
import com.sumu.bubei.models.word.mapper.WordBookRelationMapper;
import com.sumu.bubei.models.word.service.WordBookRelationService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author sumu
 * @since 2022-02-13
 */
@Service
public class WordBookRelationServiceImpl extends ServiceImpl<WordBookRelationMapper, WordBookRelation> implements WordBookRelationService {

    @Autowired
    WordBookRelationMapper wordBookRelationMapper;

    @Override
    public List<wordBookSectionVo> getWordBookSectionList(int wordBookID) {
        return wordBookRelationMapper.getWordBookSectionList(wordBookID);
    }
}
