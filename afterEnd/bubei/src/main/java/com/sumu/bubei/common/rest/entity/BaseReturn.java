package com.sumu.bubei.common.rest.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * @author sumu
 * @date 2022/2/13 15:31
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseReturn implements Serializable {
    private static final long serialVersionUID = 1L;

    private int status;
    private String message;
    private Map<String, List> result;
}
