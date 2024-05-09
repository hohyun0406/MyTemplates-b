package com.rod.api.user.model;

import com.rod.api.article.model.Article;

import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Component
@Data
@Builder
public class UserDto {
    private Long id;
    private String username;
    private String password;
    private String name;
    private String phone;
    private String address;
    private String job;
    private List<Article> articlesId;
    private String regDate;
    private String modDate;

}
