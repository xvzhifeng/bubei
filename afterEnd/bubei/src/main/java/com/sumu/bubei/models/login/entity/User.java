package com.sumu.bubei.models.login.entity;

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
@TableName("User")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "userID", type = IdType.AUTO)
    private Integer userID;

    @TableField("managerID")
    private Integer managerID;

    @TableField("memberID")
    private Integer memberID;

    private String name;

    private String password;

    private Integer age;

    private String email;

    private String phone;

    private String avatar;

    private LocalDateTime time;

    private String score;

    @TableField("wordBookID")
    private Integer wordBookID;

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
