package com.rod.api.article.service;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import com.rod.api.board.model.Board;
import com.rod.api.common.component.Messenger;
import com.rod.api.common.service.CommandService;
import com.rod.api.common.service.QueryService;
import com.rod.api.user.model.User;

import java.util.List;
import java.util.Optional;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto> {

    default Article dtoToEntity(ArticleDto dto){
        Article.ArticleBuilder builder = Article.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent());

        // writer 정보가 있을 때만 설정
        if (dto.getWriter() != null) {
            builder.writer(User.builder().id(dto.getWriter()).build());
        }

        // board 정보가 있을 때만 설정
        if (dto.getBoard() != null) {
            builder.board(Board.builder().id(dto.getBoard()).build());
        }

        return builder.build();
    }

    default ArticleDto entityToDto(Article article){
        ArticleDto.ArticleDtoBuilder builder = ArticleDto.builder()
                .id(article.getId())
                .title(article.getTitle())
                .content(article.getContent());

        // writer 정보가 있을 때만 설정
        if (article.getWriter() != null) {
            builder.writer(article.getWriter().getId());
        }

        // board 정보가 있을 때만 설정
        if (article.getBoard() != null) {
            builder.board(article.getBoard().getId());
        }

        return builder.build();
    }


//    Messenger modify(ArticleDto articleDto);
//
//    List<ArticleDto> findArticlesByTitle(String title);
//    List<ArticleDto> findArticlesByRegisterDate(String registerDate);
//
//    Optional<ArticleDto> findArticlesByWriter(String writerId);

    
}




