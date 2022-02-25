package com.sumu.bubei.models.word.entity;

import com.baomidou.mybatisplus.annotation.*;

import java.time.LocalDateTime;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

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
@TableName("WordBook")
public class WordBook implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "wordBookID", type = IdType.AUTO)
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

    @TableField(fill = FieldFill.INSERT)
    private Integer status;

    @TableField(value = "createUser", fill = FieldFill.INSERT)
    private String createUser;

    @TableField(value = "createTime", fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @TableField(value = "updateUser", fill = FieldFill.INSERT_UPDATE)
    private String updateUser;

    @TableField(value = "updateTime", fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;


}
