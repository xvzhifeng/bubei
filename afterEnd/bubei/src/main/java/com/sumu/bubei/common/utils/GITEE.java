package com.sumu.bubei.common.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.sumu.bubei.models.res.entity.git.GitUploadFile;
import lombok.extern.slf4j.Slf4j;

import java.util.Map;
import java.util.Set;

/**
 * @author sumu
 * @date 2022/2/20 15:19
 */
@Slf4j
public class GITEE {

    /**
     *  当图片大于1m时，需要登录gitee才能查看
     * @param content base64 的文件
     * @param name 文件别名
     * @param suffixName 文件后缀
     * @return 图片的url地址
     */
    public static String uploadGit(String content, String name, String suffixName){
        GitUploadFile gitUploadFile = new GitUploadFile();
        gitUploadFile.init();
        gitUploadFile.setPath(gitUploadFile.getPath() + suffixName);
        gitUploadFile.getFromData().setContent(content);
        gitUploadFile.getFromData().setMessage("upload " + name);
        String parameter = JSON.toJSONString(gitUploadFile.getFromData());

        try {
            String responseJson = HttpUtil.doPostJsonHttps(gitUploadFile.getRequestUrl(), parameter);
            Map<String, Map<String,String>> result = JSON.parseObject(responseJson, new TypeReference<Map<String, Map<String,String>>>(){});
            if (result != null) {
                Set<Map.Entry<String, Map<String,String>>> entries = result.entrySet();
                for(Map.Entry<String, Map<String,String>> entry : entries) {
                    log.info(entry.getKey()+" "+entry.getValue());
                }
                log.info(result.get("content").get("download_url"));
                return result.get("content").get("download_url");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }
}
