package com.example.demo;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@ComponentScan
@Configuration
@RestController
@RequestMapping("/user")
public class UserController {

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