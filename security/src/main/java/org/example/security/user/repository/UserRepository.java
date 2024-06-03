package org.example.security.user.repository;

import org.example.security.user.domain.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends <UserModel, Long> { //여기 확장 뭘로?
    Optional<UserModel> findByUsername(String username);
}
