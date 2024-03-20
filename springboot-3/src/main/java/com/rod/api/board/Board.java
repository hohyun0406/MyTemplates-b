package com.rod.api.board;

import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
public class Board {
    private int id;
    private String bname;
    private String btype;

    @Builder(builderMethodName = "builder")
    public Board(String title, String contentr) {
        this.bname = bname;
        this.btype = btype;
    }
}