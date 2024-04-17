package com.rod.api.board.model;

import com.rod.api.article.model.Article;
import com.rod.api.common.model.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name="boards")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@AllArgsConstructor
@Builder
@ToString(exclude = {"id"})
public class Board extends BaseEntity {
    @Id
    @Column(nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String boardTitle;
    private String boardDescription;

    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Article> articles;

}