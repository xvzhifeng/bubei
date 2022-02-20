package com.sumu.bubei.models.res.entity.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * @author sumu
 * @date 2022/2/20 19:29
 */
@AllArgsConstructor
@Data
@NoArgsConstructor
public class VoiceMp3Vo {
    private String fileName;
    private String base64;
    private String kind;
}
