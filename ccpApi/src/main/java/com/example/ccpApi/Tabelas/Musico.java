package com.example.ccpApi.Tabelas;

import com.example.ccpApi.Enums.Cargo;
import com.example.ccpApi.Enums.Instrumento;

import jakarta.persistence.*;

@Entity
public class Musico {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String telefone;
    private int comun;
    @Enumerated(value = EnumType.STRING)
    private Instrumento instrumento;
    @Enumerated(value = EnumType.STRING)
    private Cargo cargo;

    
    
    public Musico(String nome, String telefone, int comun, Instrumento instrumento, Cargo cargo) {
        this.nome = nome;
        this.telefone = telefone;
        this.comun = comun;
        this.instrumento = instrumento;
        this.cargo = cargo;
    }





    public Musico(Integer id, String nome, String telefone, int comun, Instrumento instrumento, Cargo cargo) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.comun = comun;
        this.instrumento = instrumento;
        this.cargo = cargo;
    }





    public Musico() {
    }

    
 
    

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public int getComun() {
        return comun;
    }

    public void setComum(int comun) {
        this.comun = comun;
    }


    public Instrumento getInstrumento() {
        return instrumento;
    }

    public void setInstrumento(Instrumento instrumento) {
        this.instrumento = instrumento;
    }

    public Cargo getCargo() {
        return cargo;
    }

    public void setCargo(Cargo cargo) {
        this.cargo = cargo;
    }
}
