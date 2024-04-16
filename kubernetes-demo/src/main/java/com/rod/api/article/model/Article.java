package com.rod.api.article.model;

import com.rod.api.board.model.Board;
import com.rod.api.common.model.BaseEntity;
import com.rod.api.user.model.User;
import jakarta.persistence.*;
import lombok.*;

@Entity(name = "articles")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@Setter
@ToString(exclude = {"id"})
public class Article extends BaseEntity {
    @Id
    @Column(name = "article_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;

    @ManyToOne
    @JoinColumn(name = "writer_id", nullable = true)
    private User writer;

    @ManyToOne
    @JoinColumn(name = "board_id", nullable = true)
    private Board board;

    public static Article of(Long id, String title, String content){
        Article article = new Article();
        article.id = id;
        article.title = title;
        article.content = content;

        return article;
    }

}
