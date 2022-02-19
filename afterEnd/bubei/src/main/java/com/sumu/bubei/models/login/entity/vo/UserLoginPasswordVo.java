package com.sumu.bubei.models.login.entity.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotBlank;

/**
 * @author sumu
 * @date 2022/2/20 1:51
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Validated
@ToString
public class UserLoginPasswordVo {
    @NotBlank(message = "username is not null")
    private String username;
    @NotBlank(message = "password is not null")
    private String password;
}
