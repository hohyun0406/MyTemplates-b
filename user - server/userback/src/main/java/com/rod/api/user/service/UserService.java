package com.rod.api.user.service;


import com.rod.api.common.component.Messenger;
import com.rod.api.common.service.CommandService;
import com.rod.api.common.service.QueryService;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService extends CommandService<UserDto>, QueryService<UserDto> {
    default User dtoToEntity(UserDto dto){
        return User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phone(dto.getPhone())
                .address(dto.getAddress())
                .job(dto.getJob())
                .build();
    }

    default UserDto entityToDto(User user){
        return UserDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .phone(user.getPhone())
                .address(user.getAddress())
                .job(user.getJob())
                .build();
    }




//    Messenger modify(UserDto user);
//    List<UserDto> findUsersByName(String name);
//    List<UserDto> findUsersByJob(String job);
Optional<User> findUserByUsername(String username);
}