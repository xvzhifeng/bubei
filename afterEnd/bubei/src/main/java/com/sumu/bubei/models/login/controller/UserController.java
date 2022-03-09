package com.sumu.bubei.models.login.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.sumu.bubei.common.rest.entity.ResultInfo;
import com.sumu.bubei.models.login.entity.User;
import com.sumu.bubei.models.login.entity.vo.UserLoginPasswordVo;
import com.sumu.bubei.models.login.service.impl.UserServiceImpl;
import com.sumu.bubei.models.word.controller.WordsController;
import com.sumu.bubei.models.word.entity.WordBook;
import com.sumu.bubei.models.word.entity.vo.BookAndUserVo;
import com.sumu.bubei.models.word.entity.vo.WordBookAndUserV0;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

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

    @Autowired
    WordsController wordsController;

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
            return new ResultInfo().success(HttpStatus.OK.value(),"登录成功",userServiceOne);
        } else {
            return new ResultInfo().error(HttpStatus.BAD_REQUEST.value(),"登录失败");
        }
    }

    @RequestMapping("/register")
    @ResponseBody
    public ResultInfo register(String email) {
        User user = new User();
        user.setEmail(email);
        user.setName(email);
        user.setManagerID(0);
        user.setMemberID(0);
        user.setPassword(email);
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.eq("email",email);
        if(userService.count(userQueryWrapper) > 0) {
            log.info("用户已经注册！！！");
            User userServiceOne = userService.getOne(userQueryWrapper);
            return new ResultInfo().success(HttpStatus.OK.value(),"登录成功",userServiceOne.getUserID());
        } else {
            userService.saveOrUpdate(user,userQueryWrapper);
            User userServiceOne = userService.getOne(userQueryWrapper);
            return new ResultInfo().success(HttpStatus.OK.value(),"登录成功",userServiceOne.getUserID());
        }
    }

    @RequestMapping("/getUserInfo")
    @ResponseBody
    public ResultInfo getUserInfo(@NotNull(message = "userID can't is null") int userID) {
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.eq("userID",userID);
        User one = userService.getOne(userQueryWrapper);
        return new ResultInfo().success(HttpStatus.OK.value(),"获取用户信息成功", one);
    }

    @RequestMapping("/choiceUserWordBook")
    @ResponseBody
    public ResultInfo choiceUserWordBook(BookAndUserVo bookAndUserVo) {
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.eq("userID", bookAndUserVo.getUserID());
        User userServiceOne = userService.getOne(userQueryWrapper);
        userServiceOne.setWordBookID(bookAndUserVo.getWordBookID());
        userService.saveOrUpdate(userServiceOne, userQueryWrapper);
        wordsController.initNotStudyRecordFromBook(bookAndUserVo);
        return new ResultInfo().success(HttpStatus.OK.value(), "用户选择词书成功");
    }
}
