package com.sumu.bubei.models.word.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import com.baomidou.mybatisplus.annotation.TableField;
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
@TableName("UserStudyWordRecord")
public class UserStudyWordRecord implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "userStudyWordRecordID", type = IdType.AUTO)
    private Integer userStudyWordRecordID;

    @TableField("userID")
    private Integer userID;

    @TableField("wordID")
    private Integer wordID;

    @TableField("studyWordCount")
    private Integer studyWordCount;

    @TableField("studyTime")
    private LocalDateTime studyTime;

    private String standby1;

    private String standby2;

    private String standby3;

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
