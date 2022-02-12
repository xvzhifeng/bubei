package com.sumu.bubei.models.res.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.sf.jsqlparser.expression.DateTimeLiteralExpression;

import java.util.Date;

/**
 * @author sumu
 * @date 2022/2/13 0:58
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BackgroundPicture {

    public int backgroundImageID;
    private String url;
    private String base64;
}
