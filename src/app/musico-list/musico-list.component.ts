import { Component, OnInit } from '@angular/core';
import { MusicosService } from '../services/musicos.service';
import { ActivatedRoute } from '@angular/router';
import { Musico } from '../types/musico';

@Component({
  selector: 'app-musico-list',
  templateUrl: './musico-list.component.html',
  styleUrl: './musico-list.component.css',
})
export class MusicoListComponent implements OnInit {


  id: number = 0;
  musicos: Musico[] = []


  constructor(private musicoService: MusicosService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : 0;
    });


    this.musicoService.getMusicos(this.id).subscribe(data => this.musicos = data)

    console.log("TESTE"+this.musicos);
  }







}
