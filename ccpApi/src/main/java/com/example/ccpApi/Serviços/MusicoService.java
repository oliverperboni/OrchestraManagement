package com.example.ccpApi.Serviços;

import java.util.List;

import com.example.ccpApi.Tabelas.Comun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.ccpApi.Repos.MusicoRepo;
import com.example.ccpApi.Tabelas.Musico;

@Service
public class MusicoService {

    public final MusicoRepo musicoRepo;

    @Autowired
    public MusicoService(MusicoRepo musicoRepo) {
        this.musicoRepo = musicoRepo;
    }
    @Transactional
    public void add(Musico musico) {
        musicoRepo.save(musico);
    }

    public void delete(Long id){
      musicoRepo.deleteById(id);
    }

    public List<Musico> getMusicosByComunId(Integer comun) {
         return musicoRepo. findByComun(comun);
    }
}
