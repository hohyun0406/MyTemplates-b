package com.rod.api.article;

import com.rod.api.article.model.ArticleDto;
import com.rod.api.article.service.ArticleServiceImpl;
import com.rod.api.common.component.Messenger;
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
@RequestMapping("/api/articles")
public class ArticleController {
    private final ArticleServiceImpl service;

    //커맨드 : create, update, delete

    @PostMapping("/save-new-article")
    public ResponseEntity<Messenger> save(@RequestBody ArticleDto articleDto){
        log.info("받은 정보 : {}" , articleDto);
        return ResponseEntity.ok(service.save(articleDto));
    }

    //쿼리 : read only (copy)
    @SuppressWarnings("unchecked")
    @GetMapping("/list")
    public ResponseEntity<List<ArticleDto>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @SuppressWarnings("unchecked")
    @GetMapping("/list-by-id")
    public ResponseEntity<List<ArticleDto>> findArticlesByBoard(@RequestParam("id") Long id) {
        log.info("받은 정보 : {}" , id);
        return ResponseEntity.ok(service.findArticlesByBoard(id));
    }

    @GetMapping("/detail")
    public ResponseEntity<Optional<ArticleDto>> findById(@RequestParam("id") Long id){
        log.info("입력받은 정보 : {}", id);
        return ResponseEntity.ok(service.findById(id));
    }


}
