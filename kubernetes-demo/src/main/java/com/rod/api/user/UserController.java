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
//    @PostMapping("")
//    public ResponseEntity<Messenger> join(@RequestBody Map<?, ?> paramMap){
//        Map<String, Messenger> map = new HashMap<>();
//        User newUser = repo.save(User.builder()
//                .username((String) paramMap.get("username"))
//                .password((String) paramMap.get("password"))
//                .name((String) paramMap.get("name"))
//                .phone((String) paramMap.get("phone"))
//                .job((String) paramMap.get("job"))
//                .build());
//        log.info("DB 에 저장된 User 정보 : {}", newUser);
//        return ResponseEntity.ok(new Messenger());
//    }

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
//
//    /delete/2
//    /delete?id=2




//쿼리 : read only (copy)

//    @GetMapping("/login")
//    public ResponseEntity<Messenger> login(@RequestBody UserDto userDto){
//        return ResponseEntity.ok(service.login(userDto));
//    }


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

    @PostMapping("/login")
    public ResponseEntity<Messenger> login(@RequestBody UserDto userDto) {
        log.info("login request : {}", userDto);
        return ResponseEntity.ok(service.login(userDto));
    }


}
