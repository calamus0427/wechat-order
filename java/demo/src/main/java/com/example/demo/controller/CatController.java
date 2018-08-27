package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.PathVariable;

@ComponentScan
@Configuration
@RestController
@CrossOrigin
@RequestMapping("/cat")
public class CatController {

    @RequestMapping("/{id}")
    public User getUser(@PathVariable String id){
        User user  = new User();
        user.setId(id);
        user.setUsername("id==="+Math.random());
        return user;
    }


    private class User{

        private  String id;
        private  String username;

        public String getId() {
            return id;
        }
        public void setId(String id) {
            this.id = id;
        }
        public String getUsername() {
            return username;
        }
        public void setUsername(String username) {
            this.username = username;
        }
    }
}

