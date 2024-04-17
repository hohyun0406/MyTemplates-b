package com.rod.api.article.repository;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticleRepository extends JpaRepository<Article,Long> {

//    List<ArticleDto> findByRegisterDate(String registerDate);
//
//    List<ArticleDto> findByTitle(String title);
//
//    Optional<Article> findByWriterId(String writerId);
//
//    Optional<Article> findByBoardId(String boardId);
}