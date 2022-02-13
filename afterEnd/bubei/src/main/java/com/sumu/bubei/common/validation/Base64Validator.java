package com.sumu.bubei.common.validation;

import com.sumu.bubei.common.validation.annotation.Base64Validate;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

/**
 * @author sumu
 * @date 2022/2/13 16:27
 */
public class Base64Validator implements ConstraintValidator<Base64Validate, String> {
    @Override
    public boolean isValid(String value, ConstraintValidatorContext constraintValidatorContext) {
        if (value == null) return false;
        Base64.Decoder decoder = Base64.getDecoder();
        Base64.Encoder encoder = Base64.getEncoder();
        try {
            String s = new String(decoder.decode(value), "UTF-8");
            byte[] bytes = s.getBytes(StandardCharsets.UTF_8);
            String s1 = encoder.encodeToString(bytes);
            return s1.equals(value);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return false;
        }
    }
}
