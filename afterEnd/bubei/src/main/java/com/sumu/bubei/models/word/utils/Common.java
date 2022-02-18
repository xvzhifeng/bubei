package com.sumu.bubei.models.word.utils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

/**
 * @author sumu
 * @date 2022/2/18 21:48
 */
public class Common {
    /**
     * 1 2 4 7 15 30
     * @return
     */
    public static List<String> getDateReview() {
        List<String> res = new ArrayList<>();
        int[] date = new int[]{1,2,4,7,15,30,45,60};
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDateTime now = LocalDateTime.now();
        for(int d : date) {
            String format = dateTimeFormatter.format(now.minusDays(d));
            res.add(format);
        }
        return res;
    }

    /**
     * 获得年月日的时间
     * @return yyyy-mm-dd
     */
    public static String getDateYearMouthDay() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }
}
