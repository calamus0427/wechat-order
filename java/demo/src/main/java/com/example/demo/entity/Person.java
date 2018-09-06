package com.example.demo.entity;

//@Entity对应数据库中的一个表
public class Person {

    private Integer id;
    private String name;
    private Integer age;

    //必须要有一个无参的构造函数，不然数据库会报错
    public Person() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
