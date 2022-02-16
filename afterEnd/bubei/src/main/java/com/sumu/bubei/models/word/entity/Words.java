package com.sumu.bubei.models.word.entity;

import com.baomidou.mybatisplus.annotation.*;

import java.time.LocalDateTime;
import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotBlank;

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
@TableName("Words")
@Validated
public class Words implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "wordID", type = IdType.AUTO)
    private Integer wordID;

    @NotBlank(message = "japaneseMeans 不能为空")
    @TableField("japaneseMeans")
    private String japaneseMeans;

    @NotBlank(message = "falseName 不能为空")
    @TableField("falseName")
    private String falseName;

    @NotBlank(message = "chineseMeans 不能为空")
    @TableField("chineseMeans")
    private String chineseMeans;

    @NotBlank(message = "englishMeans 不能为空")
    @TableField("englishMeans")
    private String englishMeans;


    @NotBlank(message = "voice 不能为空")
    private String voice;

    @TableField("voiceUrl")
    private String voiceUrl;

    @TableField("sentenceID")
    private Integer sentenceID;

    @TableField("phraseID")
    private Integer phraseID;

    @TableField("kindID")
    private Integer kindID;

    private String standby1;

    private String standby2;

    private String standby3;

    private Integer status;

    @TableField("createUser")
    private String createUser;

    @TableField(value = "createTime", fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @TableField("updateUser")
    private String updateUser;

    @TableField(value = "updateTime", fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;


}
