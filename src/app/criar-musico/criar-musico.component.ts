import { MusicosService } from './../services/musicos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Intrumentos } from '../types/instrumentos';
import { ActivatedRoute } from '@angular/router';
import { Musico } from '../types/musico';
import { Cargos } from '../types/cargo';

@Component({
  selector: 'app-criar-musico',
  templateUrl: './criar-musico.component.html',
  styleUrl: './criar-musico.component.css',
})
export class CriarMusicoComponent implements OnInit {

  id: number = 0;
  userForm: FormGroup;
  intrumentos = Object.values(Intrumentos);
  cargos = Object.values(Cargos);

  constructor(private fb: FormBuilder, private musicosService: MusicosService, private route: ActivatedRoute) {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      comum: [this.id],
      instrumento: ['', Validators.required],
      cargo: ['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : 0;
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      userData.comum= this.id
      console.log(userData);
      this.musicosService.createMusico(userData).subscribe(()=> console.log("Criei musico"))
    }
  }
}
