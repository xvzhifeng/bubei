package com.sumu.bubei.models.word.entity.vo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
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
@NoArgsConstructor
@ToString
public class WordBookAndUserV0 implements Serializable {
    private static final long serialVersionUID = 1L;
    private int userID;
    private Integer wordBookID;
    private String wordBookName;
    private String wordBookKind;
    private String wordBookLabel;
    private String wordSection;
    private int learnCount;
    private int count;
}
