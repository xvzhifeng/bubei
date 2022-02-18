package com.sumu.bubei.models.word.entity.vo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;
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
public class StudyRecordVo implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableField("userID")
    private Integer userID;

    @NotBlank(message = "wordID is not null")
    @TableField("wordID")
    private Integer wordID;

    @TableField("studyTime")
    private LocalDateTime studyTime;

    private String standby1;

    private String standby2;

    private String standby3;

    private Integer status;

}
