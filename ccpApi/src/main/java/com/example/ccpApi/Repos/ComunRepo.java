package com.example.ccpApi.Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ccpApi.Tabelas.Comun;

@Repository
public interface ComunRepo extends JpaRepository<Comun,Integer>{

    @Override
    public Comun getById(Integer aLong);
}
