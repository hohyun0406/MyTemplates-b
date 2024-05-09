package com.rod.api.user;

import com.rod.api.article.Article;
import com.rod.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl service;
    private final UserRepository repo;


    @PostMapping("/api/login")
    public Map<String, ?> login(@RequestBody Map<?, ?> paramMap){
        Map<String, Messenger> map = new HashMap<>();
        String username = (String) paramMap.get("username");
        System.out.println("리퀘스트가 가져온 이름 : "+username);
        String password = (String) paramMap.get("password");
        System.out.println("리퀘스트가 가져온 비번 : "+password);
        User dbUser = repo.findByUsername(username).orElse(null);
        if(dbUser==null){
            map.put("message", Messenger.FAIL);
        }else if(!dbUser.getPassword().equals(password)){
            map.put("message", Messenger.WRONG_PASSWORD);
        }else{
            map.put("message", Messenger.SUCCESS);
        }
        return map;
    }

    @PostMapping("/api/users")
    public Map<String, ?> join(@RequestBody Map<?, ?> paramMap){
        Map<String, Messenger> map = new HashMap<>();
        User newUser = repo.save(User.builder()
                .username((String) paramMap.get("username"))
                .password((String) paramMap.get("password"))
                .name((String) paramMap.get("name"))
                .phone((String) paramMap.get("phone"))
                .job((String) paramMap.get("job"))
                .build());
        System.out.println("DB 에 저장된 User 정보 : " + newUser);
        map.put("result", Messenger.SUCCESS);
        return map;
    }

    @SuppressWarnings("unchecked")
    @GetMapping("/api/all-users")
    public Map<?,?> findAll() throws SQLException {
        Map<String, Object> map = new HashMap<>();
        map.put("message", Messenger.SUCCESS);
        @SuppressWarnings("unchecked")
        List<User> list = new ArrayList<>();


        list = service.findAll();
        list.forEach(System.out::println);
        System.out.println("리스트 사이즈 : "+list.size());
        map.put("result", list);
        return map;
    }

}
