package com.rod.api.board.model;

import com.rod.api.article.model.Article;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Component
@Data
@Builder
public class BoardDto {
    private Long id;
    private String boardName;
    private String boardType;
    private List<Article> articles;
    private String regDate;
    private String modDate;

}
