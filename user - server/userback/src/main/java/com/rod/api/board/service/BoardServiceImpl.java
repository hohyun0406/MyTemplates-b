package com.rod.api.board.service;


import com.rod.api.board.model.Board;
import com.rod.api.board.model.BoardDto;
import com.rod.api.board.repository.BoardRepository;
import com.rod.api.common.component.Messenger;
import com.rod.api.common.component.PageRequestVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {
    private final BoardRepository repository;

    @Override
    public Messenger save(BoardDto boardDto) {
        entityToDto(repository.save(dtoToEntity(boardDto)));
        return new Messenger();
    }

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return new Messenger();
    }

    @Override
    public Messenger modify(BoardDto boardDto) {
        entityToDto(repository.save(dtoToEntity(boardDto)));
        return new Messenger();
    }

//    @Override
//    public List<BoardDto> findBoardsByBoardName(String boardName) {
//        return repository.findByBoardName(boardName);
//    }
//
//    @Override
//    public Optional<BoardDto> findBoardsByBoardType(String boardType) {
//        return Optional.of(entityToDto(repository.findByBoardType(boardType)));
//    }
//
//    @Override
//    public List<BoardDto> findBoardsByRegisterDate(String registerDate) {
//        return repository.findByRegisterDate();
//    }


    @Override
    public List<BoardDto> findAll() {
        return repository.findAll().stream().map(this::entityToDto).collect(Collectors.toList());
    }

    @Override
    public Optional<BoardDto> findById(Long id) {
//        return Optional.of(entityToDto(repository.findById(id)));
        return repository.findById(id).map(this::entityToDto);
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }
}
