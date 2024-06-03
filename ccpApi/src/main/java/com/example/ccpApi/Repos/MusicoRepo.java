package com.example.ccpApi.Repos;

import com.example.ccpApi.Tabelas.Comun;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.ccpApi.Tabelas.Musico;

import java.util.List;

@Repository
public interface MusicoRepo extends JpaRepository<Musico,Long>{

    List<Musico> findByComun(Integer comun);
}
