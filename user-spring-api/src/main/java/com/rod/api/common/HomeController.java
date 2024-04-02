package com.rod.api.common;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequiredArgsConstructor
public class HomeController {
    @GetMapping("/")
    public String hello(){
        return "Welcome To String Boot !";
    }

    @PostMapping("/api/name")
    public Map<String,?> name (@RequestBody Map<String,?> map){
        String name = (String)map.get("name");
        System.out.println("리퀘스트가 가져온 이름 : "+name);
        Map<String,String> respMap = new HashMap<>();
        respMap.put("name", "환영합니다" + name);
        return respMap;
    }
}
