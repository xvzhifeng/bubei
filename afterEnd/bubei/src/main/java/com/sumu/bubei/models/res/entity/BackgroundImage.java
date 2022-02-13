package com.sumu.bubei.models.res.entity;

import com.baomidou.mybatisplus.annotation.*;

import java.time.LocalDateTime;

import java.io.Serializable;

import com.sumu.bubei.common.validation.annotation.Base64Validate;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NonNull;
import lombok.experimental.Accessors;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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
@TableName("BackgroundImage")
@Validated
public class BackgroundImage implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "backgroundImageID",type = IdType.AUTO)
    private Integer backgroundImageID;

    @NotBlank(message = "url 字段不能为空")
    private String url;

    @NotBlank(message = "base64 字段不能为空")
    @Base64Validate(message = "base64 字段必须是符合base64编码字符")
    private String base64;

    private String standby1;

    private String standby2;

    private String standby3;

    @TableField(fill = FieldFill.INSERT)
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
