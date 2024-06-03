package com.example.ccpApi.Tabelas;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
public class Comun {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private int regiao;

    public Comun() {
    }


    public Comun(String name, int regiao) {
        this.name = name;
        this.regiao = regiao;
    }

    public Comun(Integer id, String name, int regiao) {
        this.id = id;
        this.name = name;
        this.regiao = regiao;
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

    public int getRegiao() {
        return regiao;
    }

    public void setRegiao(int regiao) {
        this.regiao = regiao;
    }
}


