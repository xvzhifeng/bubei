package com.sumu.bubei.models.word.service.impl;

import com.sumu.bubei.models.word.entity.Words;
import com.sumu.bubei.models.word.mapper.WordsMapper;
import com.sumu.bubei.models.word.service.WordsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
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
public class WordsServiceImpl extends ServiceImpl<WordsMapper, Words> implements WordsService {

}
