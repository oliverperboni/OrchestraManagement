package com.example.ccpApi.Controllers;

import java.util.List;

import com.example.ccpApi.Serviços.ComunService;
import com.example.ccpApi.Tabelas.Comun;
import org.springframework.web.bind.annotation.*;

import com.example.ccpApi.Serviços.MusicoService;
import com.example.ccpApi.Tabelas.Musico;


@RestController
@RequestMapping(path = "musicos")
public class MusicoController {

    public final MusicoService musicoService;

    public final ComunService comunService;

    public MusicoController(MusicoService musicoService ,ComunService comunService ) {
        this.musicoService = musicoService;
        this.comunService = comunService;
    }

    @PostMapping
    public void addMusicoToComun(@RequestBody Musico musico){
        Comun comum = comunService.getOneComun(musico.getComun());
        if( comum != null){
            musicoService.add(musico);
        }
    }


   @GetMapping
   public List<Musico> getMusicosByComunId(@RequestParam Integer comunId) {
       Comun comun = comunService.getOneComun(comunId);
       if(comun != null){
           return musicoService.getMusicosByComunId(comunId);
       }else {
           return null;
       }

   }
    

}
