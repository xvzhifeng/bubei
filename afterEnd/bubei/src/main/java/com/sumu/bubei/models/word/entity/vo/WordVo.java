package com.sumu.bubei.models.word.entity.vo;

import com.sumu.bubei.models.word.entity.Sentences;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.NotBlank;
import java.util.List;

/**
 * @author sumu
 * @date 2022/2/16 22:58
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class WordVo {
    private int wordID;
    @NotBlank
    private String japaneseMeans;
    @NotBlank
    private String chineseMeans;
    @NotBlank
    private String falseName;
    private String EnglishMeans;
    private String voice;
    private String voiceUrl;
    private Integer count;
    private List<Sentences> sentence;
    private List<Sentences> phrase;
    private List<wordOption> options;
    private int wordBookID;
}
