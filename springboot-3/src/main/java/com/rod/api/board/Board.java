package com.rod.api.board;

import jakarta.persistence.*;
import lombok.*;

@Entity(name="boards")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
public class Board {
    @Id
    @Column(name = "board_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String bname;
    private String btype;

    @Builder(builderMethodName = "builder")
    public Board(String title, String contentr) {
        this.bname = bname;
        this.btype = btype;
    }
}