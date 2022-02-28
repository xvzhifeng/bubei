package com.sumu.bubei.models.res.entity.git;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;
import java.util.UUID;

/**
 * @author sumu
 * @date 2022/2/15 1:05
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Accessors(chain = true)
public class GitUploadFile {

    private String owner;
    private String repo;
    private String path;
    private FromData fromData = new FromData();

    public void init () {
        // 645122d68c0c9d84abb61e6081f90955
        String date = LocalDateTime.now().toString();
        this.owner = "sumuxzf";
        this.repo = "picture_typora";
        this.path = "img/bubei/"+date;
        this.fromData.setAccess_token("645122d68c0c9d84abb61e6081f90955");
    }

    public String getRequestUrl() {
        String res = "https://gitee.com/api/v5/repos/";
        res += owner + "/" + repo + "/contents/" + path;
        return res;
    }

}


