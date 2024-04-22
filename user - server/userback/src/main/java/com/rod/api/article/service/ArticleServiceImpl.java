package com.rod.api.article.service;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.article.repository.ArticleRepository;
import com.rod.api.common.component.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository repository;

    @Override
    public Messenger save(ArticleDto articleDto) {
        Article savedArticle = repository.save(dtoToEntity(articleDto));

        return Messenger.builder()
                .message(savedArticle.getId() != null ? "SUCCESS":"FAILURE")
                .build();
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

    @Override
    public List<ArticleDto> findAll() {
        return repository.findAll().stream().map(this::entityToDto).collect(Collectors.toList());
    }

    public List<ArticleDto> findArticlesByBoard(Long id) {
        return repository.getArticlesByBoardId(id).stream().map(i->entityToDto(i)).collect(Collectors.toList());
//        return repository.findAll().stream().filter(i->i.getBoard().getId().equals(id)).map((i)->(entityToDto(i))).toList();
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
