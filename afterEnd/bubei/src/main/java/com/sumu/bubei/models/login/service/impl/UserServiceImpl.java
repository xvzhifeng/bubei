package com.sumu.bubei.models.login.service.impl;

import com.sumu.bubei.models.login.entity.User;
import com.sumu.bubei.models.login.mapper.UserMapper;
import com.sumu.bubei.models.login.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author sumu
 * @since 2022-02-13
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
