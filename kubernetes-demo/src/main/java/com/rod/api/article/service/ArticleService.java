package com.rod.api.article.service;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.common.component.Messenger;
import com.rod.api.common.service.CommandService;
import com.rod.api.common.service.QueryService;

import java.util.List;
import java.util.Optional;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto> {

    default Article dtoToEntity(ArticleDto dto){
        return Article.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .build();
    }

    default ArticleDto entityToDto(Article article){
        return ArticleDto.builder()
                .id(article.getId())
                .title(article.getTitle())
                .content(article.getContent())
                .build();
    }

//    Messenger modify(ArticleDto articleDto);
//
//    List<ArticleDto> findArticlesByTitle(String title);
//    List<ArticleDto> findArticlesByRegisterDate(String registerDate);
//
//    Optional<ArticleDto> findArticlesByWriter(String writerId);
//    Optional<ArticleDto> findArticlesByBoard(String boardId);
    
}




