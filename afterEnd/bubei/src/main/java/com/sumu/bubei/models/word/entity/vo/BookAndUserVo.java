package com.sumu.bubei.models.word.entity.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * @author sumu
 * @date 2022/2/19 12:49
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookAndUserVo {
    @NotNull(message = "userID is not null")
    private int userID;
    @NotNull(message = "wordBookID is not null")
    private int wordBookID;
}
