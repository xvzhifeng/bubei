package com.sumu.bubei.models.word.entity.vo;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * @author sumu
 * @date 2022/2/19 1:00
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class wordOption {
    private String japaneseMeans;
    private String falseName;
    private String chineseMeans;
    private String englishMeans;
}
