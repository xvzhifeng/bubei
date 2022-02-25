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
@TableName("Sentences")
public class Sentences implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "sentenceID", type = IdType.AUTO)
    private Integer sentenceID;

    @TableField("japaneseMeans")
    private String japaneseMeans;

    @TableField("chineseMeans")
    private String chineseMeans;

    @TableField("englishMeans")
    private String englishMeans;

    private Integer kind;

    // voiceUrl
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
