package com.sumu.bubei.models.word.entity.vo;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 *
 * </p>
 *
 * @author sumu
 * @since 2022-02-13
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class WordBookCountInfoVo implements Serializable {

    private static final long serialVersionUID = 1L;
    private Integer wordBookID;

    @TableField("wordBookName")
    private String wordBookName;

    @TableField("wordBookKind")
    private String wordBookKind;

    @TableField("wordBookLabel")
    private String wordBookLabel;

    private String standby1;

    private String standby2;

    private String standby3;

    private int count;
}
