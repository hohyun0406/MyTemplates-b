package com.rod.api.article.repository;

import com.rod.api.article.model.Article;
import com.rod.api.article.model.ArticleDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;


@Repository
public interface ArticleRepository extends JpaRepository<Article,Long> {
    //JPQL Default
    @Query("select a from articles a where a.board.id =:boardId")
    public List<Article> getArticlesByBoardId(@Param("boardId") Long boardId);


// Native - 전달할 거 없이 그냥 특정 보드만 가져오겠다. 겟방식. 특정상황아니면사용안함
//    @Query(value = "select * from articles a where a.board.id =:boardId", nativeQuery = true)
//    public List<Map<String,Object>> getQnaArticles(@Param("boardId") Long boardId);


    //JPSQL Return Type DTO
//    String articleDtoMapping = "new com.rod.api.article.model.ArticleDto(" +
//            "a.id, a.title, a.content, a.writer.id, a.board.id" +
//            ", a.regDate, a.modDate)";
//    @Modifying
//    @Query("SELECT"+ articleDtoMapping +"FROM Article a WHERE a.board.id = :boardId")
//    public List<ArticleDto> getArticleDtoByBoardId(@Param("boardId") Long boardId);



}