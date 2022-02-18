package com.sumu.bubei.models.login.entity.vo;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
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
public class UserVo implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer userID;
    private String email;
    private int count;
    private int current;
    private int size;
}
