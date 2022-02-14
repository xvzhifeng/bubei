package com.sumu.bubei.models.res.entity.git;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.Accessors;

/**
 * @author sumu
 * @date 2022/2/15 1:29
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Accessors(chain = true)
public class FromData {
    private String access_token;
    private String content;
    private String message;
    private String branch;
}
