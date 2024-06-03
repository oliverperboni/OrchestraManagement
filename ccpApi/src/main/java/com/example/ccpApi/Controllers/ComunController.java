package com.example.ccpApi.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ccpApi.Serviços.ComunService;
import com.example.ccpApi.Tabelas.Comun;

@RestController
@RequestMapping(path = "comun")
public class ComunController {

    private final ComunService comunService;

    @Autowired
    public ComunController(ComunService comunService) {
        this.comunService = comunService;
    }

    @PostMapping  
    public void addComun(@RequestBody Comun comun){
        comunService.add(comun);
    }

    @GetMapping
    public List<Comun> getComuns(){
        return comunService.get();
    }

    

}
