package com.rod.api.common.security.service;

import com.rod.api.common.component.Messenger;
import com.rod.api.user.model.UserDto;

public interface AuthService {
    Messenger login(UserDto userDto);
    String createToken(UserDto userDto);
}


