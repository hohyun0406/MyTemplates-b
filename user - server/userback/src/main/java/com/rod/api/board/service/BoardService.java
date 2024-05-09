package com.rod.api.board.service;


import com.rod.api.board.model.Board;

import com.rod.api.board.model.BoardDto;
import com.rod.api.common.component.Messenger;
import com.rod.api.common.service.CommandService;
import com.rod.api.common.service.QueryService;
import com.rod.api.user.model.User;
import com.rod.api.user.model.UserDto;

import java.util.List;
import java.util.Optional;

public interface BoardService extends CommandService<BoardDto>, QueryService<BoardDto> {
    default Board dtoToEntity(BoardDto dto){
        return Board.builder()
                .id(dto.getId())
                .boardTitle(dto.getBoardTitle())
                .boardDescription(dto.getBoardDescription())
                .build();
    }

    default BoardDto entityToDto(Board board){
        return BoardDto.builder()
                .id(board.getId())
                .boardTitle(board.getBoardTitle())
                .boardDescription(board.getBoardDescription())
                .build();
    }

//    Messenger modify(BoardDto boardDto);
//    List<BoardDto> findBoardsByBoardName(String boardName);
//    Optional<BoardDto> findBoardsByBoardType(String boardType);
//    List<BoardDto> findBoardsByRegisterDate(String registerDate);


}
