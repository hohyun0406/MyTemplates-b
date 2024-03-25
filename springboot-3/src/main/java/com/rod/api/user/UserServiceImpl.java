package com.rod.api.user;

import com.rod.api.common.AbstractService;
import com.rod.api.common.UtilServiceImpl;
import com.rod.api.enums.Messenger;

import java.sql.SQLException;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class UserServiceImpl extends AbstractService<User> implements UserService {

    @Override
    public String addUsers() {
        return null;
    }

    @Override
    public String login(User user) {
        return null;
    }

    @Override
    public String updatePassword(User user) {
        return null;
    }

    @Override
    public List<?> findUsersByName(String name) {
        return null;
    }

    @Override
    public Map<String, ?> findUsersByNameFromMap(String name) {
        return null;
    }

    @Override
    public List<?> findUsersByJob(String job) {
        return null;
    }

    @Override
    public Map<String, ?> findUsersByJobFromMap(String job) {
        return null;
    }

    @Override
    public Map<String, ?> getUserMap() {
        return null;
    }

    @Override
    public String test() {
        return null;
    }

    @Override
    public List<?> findUsers() throws SQLException {
        return null;
    }

    @Override
    public Messenger createUsers() throws SQLException {
        return null;
    }

    @Override
    public Messenger save(User user) {
        return null;
    }

    @Override
    public List<User> findAll() throws SQLException {
        return null;
    }

    @Override
    public Optional<User> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public String count() {
        return null;
    }

    @Override
    public Optional<User> getOne(String id) {
        return Optional.empty();
    }

    @Override
    public String delete(User user) {
        return null;
    }

    @Override
    public Boolean existsById(Long id) {
        return null;
    }
}