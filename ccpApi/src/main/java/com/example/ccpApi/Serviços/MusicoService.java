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

  public Musico updateMusico(Long id, Musico musicoDetails) {
    Musico musico = musicoRepo.findById(id)
      .orElseThrow(() -> new RuntimeException("Músico não encontrado com id " + id));

    musico.setNome(musicoDetails.getNome());
    musico.setInstrumento(musicoDetails.getInstrumento());
    musico.setComum(musicoDetails.getComun());
    musico.setCargo(musicoDetails.getCargo());
    musico.setTelefone(musicoDetails.getTelefone());

    return musicoRepo.save(musico);
  }

  public Musico getOneById(long id) {
    return musicoRepo.findById(id).orElse(null);
  }
}
