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
@TableName("UserNotStudyWordRecord")
public class UserNotStudyWordRecord implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "userNotStudyWordRecordID", type = IdType.AUTO)
    private Integer userNotStudyWordRecordID;

    @TableField("userID")
    private Integer userID;

    @TableField("wordID")
    private Integer wordID;

    @TableField("isStudy")
    private Integer isStudy;

    private String standby1;

    private String standby2;

    private String standby3;

    @TableField(fill = FieldFill.INSERT)
    private Integer status;

    @TableField("createUser")
    private String createUser;

    @TableField("createTime")
    private LocalDateTime createTime;

    @TableField("updateUser")
    private String updateUser;

    @TableField("updateTime")
    private LocalDateTime updateTime;


}
