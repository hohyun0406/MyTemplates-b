package com.rod.api.board;

import com.rod.api.board.model.BoardDto;
import com.rod.api.board.service.BoardServiceImpl;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@Slf4j
@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})
@RequestMapping("/api/boards")
public class BoardController {
    private final BoardServiceImpl service;

//    @SuppressWarnings("unchecked")
    @GetMapping("/list")
    public ResponseEntity<List<BoardDto>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/detail")
    public ResponseEntity<Optional<BoardDto>> findById(@RequestParam Long id){
        log.info("입력받은 정보 : {}", id);
        return ResponseEntity.ok(service.findById(id));
    }
    
}

