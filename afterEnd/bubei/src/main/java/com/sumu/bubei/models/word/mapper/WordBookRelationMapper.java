package com.sumu.bubei.models.word.mapper;

import com.sumu.bubei.models.word.entity.WordBookRelation;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.sumu.bubei.models.word.entity.vo.wordBookSectionVo;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author sumu
 * @since 2022-02-13
 */
public interface WordBookRelationMapper extends BaseMapper<WordBookRelation> {
    @Select("SELECT DISTINCT standby1 as name FROM WordBookRelation WHERE wordBookID = ${wordBookID} ORDER BY standby1 ASC")
    List<wordBookSectionVo> getWordBookSectionList(int wordBookID);
}
