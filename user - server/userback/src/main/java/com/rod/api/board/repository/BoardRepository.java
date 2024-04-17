package com.rod.api.board.repository;

import com.rod.api.board.model.Board;
import com.rod.api.board.model.BoardDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<Board,Long> {

//    List<BoardDto> findByBoardName(String boardName);
//
//    Optional<Board> findByBoardType(String boardType);
//
//    List<BoardDto> findByRegisterDate();
}
