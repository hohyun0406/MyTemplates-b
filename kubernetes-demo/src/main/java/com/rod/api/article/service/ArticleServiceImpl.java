package com.rod.api.article.service;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.article.repository.ArticleRepository;
import com.rod.api.common.component.Messenger;
import com.rod.api.common.component.PageRequestVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository repository;

    @Override
    public Messenger save(ArticleDto articleDto) {
        entityToDto(repository.save(dtoToEntity(articleDto)));
        return new Messenger();
    }

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return new Messenger();
    }

    @Override
    public Messenger modify(ArticleDto articleDto) {
        entityToDto(repository.save(dtoToEntity(articleDto)));
        return new Messenger();
    }

//    @Override
//    public List<ArticleDto> findArticlesByTitle(String title) {
//        return repository.findByTitle(title);
//    }
//
//    @Override
//    public List<ArticleDto> findArticlesByRegisterDate(String registerDate) {
//        return repository.findByRegisterDate(registerDate);
//    }
//
//    @Override
//    public Optional<ArticleDto> findArticlesByWriter(String writerId) {
//        return Optional.of(entityToDto(repository.findByWriterId(writerId)));
//    }
//
//    @Override
//    public Optional<ArticleDto> findArticlesByBoard(String boardId) {
//        return Optional.of(entityToDto(repository.findByBoardId(boardId)));
//    }


    @Override
    public List<ArticleDto> findAll() {
        return repository.findAll().stream().map(this::entityToDto).collect(Collectors.toList());
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
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
}
