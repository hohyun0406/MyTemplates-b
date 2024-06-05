package org.example.security.user.repository;

import org.example.security.user.domain.RoleModel;
import org.example.security.user.domain.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleModel, Integer> {
    RoleModel findByRoleName(RoleName roleName);
}
