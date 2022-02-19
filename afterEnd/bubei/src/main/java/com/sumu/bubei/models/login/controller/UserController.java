package com.sumu.bubei.models.login.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.sumu.bubei.common.rest.entity.ResultInfo;
import com.sumu.bubei.models.login.entity.User;
import com.sumu.bubei.models.login.entity.vo.UserLoginPasswordVo;
import com.sumu.bubei.models.login.service.impl.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author sumu
 * @since 2022-02-13
 */
@RestController
@RequestMapping("/user")
@CrossOrigin
@Slf4j
public class UserController {

    @Autowired
    UserServiceImpl userService;
    private ResultInfo resultInfo;

    @RequestMapping("/passwordLogin")
    @ResponseBody
    public ResultInfo passwordLogin(@Validated UserLoginPasswordVo userLoginPasswordVo) {
        log.info(userLoginPasswordVo.toString());
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.eq("name",userLoginPasswordVo.getUsername());
        userQueryWrapper.eq("password", userLoginPasswordVo.getPassword());
        long count = userService.count(userQueryWrapper);
        if(count == 1) {
            User userServiceOne = userService.getOne(userQueryWrapper);
            return new ResultInfo().success(HttpStatus.OK.value(),"登录成功",userServiceOne.getUserID());
        } else {
            return new ResultInfo().error(HttpStatus.BAD_REQUEST.value(),"登录失败");
        }
    }
}
