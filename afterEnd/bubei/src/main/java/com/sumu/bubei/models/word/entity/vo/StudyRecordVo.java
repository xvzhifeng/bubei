package com.sumu.bubei.models.word.entity.vo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
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
@Validated
public class StudyRecordVo implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer userID;

    @NotNull(message = "wordID is not null")
    private Integer wordID;

    private LocalDateTime studyTime;

    private int isStudy;

    private String standby1;

    private String standby2;

    private String standby3;

    private Integer status;

}
