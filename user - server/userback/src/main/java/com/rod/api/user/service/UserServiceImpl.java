package com.rod.api.user.service;


import com.rod.api.common.component.JwtProvider;
import com.rod.api.common.component.Messenger;
import com.rod.api.common.component.PageRequestVo;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;
import com.rod.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class UserServiceImpl implements UserService {
    private final UserRepository repository;

    private final JwtProvider jwtProvider;

    @Override
    public Messenger save(UserDto userDto) {
        repository.save(dtoToEntity(userDto));
        return Messenger.builder().message(repository.findById(userDto.getId()).isPresent() ? "SUCCESS" : "FAILURE").build();
    }

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return Messenger.builder().message(repository.findById(id).isPresent() ? "FAILURE" : "SUCCESS").build(); //값이 없어야 성공
    }

    @Override
    public Messenger modify(UserDto userDto) {
        User ent = repository.save(dtoToEntity(userDto));
        log.info(" ============ BoardServiceImpl modify Entity Debug =========== ");
        log.info(ent);
        System.out.println((ent instanceof User) ? "SUCCESS" : "FAILURE");
        return Messenger.builder()
                .message((ent instanceof User) ? "SUCCESS" : "FAILURE")
                .build();
//        return Messenger.builder()
//                .message((repository.save(dtoToEntity(userDto)) instanceof User)
//                        ? "SUCCESS" : "FAILURE").build(); //아직 무조건 성공만
    }

    @Override
    public List<UserDto> findAll() {
        return repository.findAll().stream().map(this::entityToDto).collect(Collectors.toList());
    }

    @Override
    public Optional<UserDto> findById(Long id) {
        return repository.findById(id).map(this::entityToDto);
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }

    @Transactional //이거 어노테이션 어떤거?
    public Messenger login(UserDto userDto) {
        User user = repository.findByUsername(userDto.getUsername()).get();
        String token = jwtProvider.createToken(entityToDto(user));
        boolean flag = user.getPassword().equals(userDto.getPassword());

//        boolean flag = repository.findByUsername(userDto.getUsername()).get().getPassword().equals(userDto.getPassword());
//        String token = jwtProvider.createToken(userDto);

        //토큰을 각 세션(Header, Payload, Signature로 분할)
        String[] chunks = token.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();

        String header = new String(decoder.decode(chunks[0]));
        String payload = new String(decoder.decode(chunks[1]));

        log.info("Token Header : "+header);
        log.info("Token payload : "+payload);

        return Messenger.builder()
                .message(flag ? "SUCCESS" : "FAILURE")
                .token(flag ? token : "None")
                .build();
    }

    @Override
    public Optional<User> findUserByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public Messenger existsByUsername(String username) {
        Optional<User> userOptional = repository.findByUsername(username);
        if(userOptional.isPresent()){
            return Messenger.builder().message("SUCCESS").build();
        } else {
            return Messenger.builder().message("FAILURE").build();
        }
    }
}