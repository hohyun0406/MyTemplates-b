package com.rod.api.user;

import com.rod.api.common.component.Messenger;
import com.rod.api.user.model.UserDto;
import com.rod.api.user.service.UserServiceImpl;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/auth")
@Slf4j
public class AuthController {

    private final UserServiceImpl service;

    @PostMapping("/login")
    public ResponseEntity<Messenger> login(@RequestBody UserDto userDto) {
        log.info("login request : {}", userDto);
        Messenger messenger = service.login(userDto);
        return ResponseEntity.ok(messenger);
    }

    @GetMapping("/exists-id")
    public ResponseEntity<Messenger> existsId(@RequestParam("username") String username){
        log.info("username request : {}", username);
        return ResponseEntity.ok(service.existsByUsername(username));
    }

}
