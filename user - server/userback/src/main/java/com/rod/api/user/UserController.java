package com.rod.api.user;

import com.rod.api.common.component.Messenger;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;
import com.rod.api.user.repository.UserRepository;
import com.rod.api.user.service.UserServiceImpl;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.*;

@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/users")
@Slf4j
public class UserController {

    private final UserServiceImpl service;


    //커맨드 : create, update, delete

    @PostMapping("/save")
    public ResponseEntity<Messenger> save(@RequestBody UserDto userDto){
        log.info("save request info : {} ", userDto);
        return ResponseEntity.ok(service.save(userDto));
    }

    @PostMapping("/modify")
    public ResponseEntity<Messenger> modify(@RequestBody UserDto userDto){
        log.info("modify request info : {}", userDto);
        return ResponseEntity.ok(service.save(userDto));
    }

    @GetMapping("/delete")
    public ResponseEntity<Messenger> deleteById(@RequestParam Long id){
        log.info("입력받은 아이디 : {} ", id);
        return ResponseEntity.ok(service.deleteById(id));
    }


//쿼리 : read only (copy)


//    @SuppressWarnings("unchecked")
    @GetMapping("/list")
    public ResponseEntity<List<UserDto>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/detail")
    public ResponseEntity<Optional<UserDto>> findById(@RequestParam Long id){
        log.info("입력받은 아이디 : {}", id);
        return ResponseEntity.ok(service.findById(id));
    }

    @GetMapping("/logout")
    public ResponseEntity<Boolean> logout(@RequestHeader("Authorization") String accessToken){
        log.info("1- logout request : {}", accessToken);
        Boolean flag = service.logout(accessToken);
        return ResponseEntity.ok(flag);
    }

}
