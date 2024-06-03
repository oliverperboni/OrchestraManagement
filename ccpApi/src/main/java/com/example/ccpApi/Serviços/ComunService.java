package com.example.ccpApi.Serviços;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ccpApi.Repos.ComunRepo;
import com.example.ccpApi.Tabelas.Comun;

@Service
public class ComunService {

    public final ComunRepo comunRepo;

    @Autowired
    public ComunService(ComunRepo comunRepo) {
        this.comunRepo = comunRepo;
    }

    public void add(Comun comun) {
        comunRepo.save(comun);
        
    }

    public List<Comun> get() {
        return comunRepo.findAll();
    }

    public Comun getOneComun(Integer id){
        return comunRepo.getById(id);
    }

}
