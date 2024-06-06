import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Musico } from '../types/musico';
import { MusicosService } from '../services/musicos.service';
import { Intrumentos } from '../types/instrumentos';
import { Cargos } from '../types/cargo';

@Component({
  selector: 'app-editar-musico',
  templateUrl: './editar-musico.component.html',
  styleUrls: ['./editar-musico.component.css'],
})
export class EditarMusicoComponent implements OnInit {
  id: number;
  instrumentos = Object.values(Intrumentos);
  userForm: FormGroup;
  cargos = Object.values(Cargos);
  musico: Musico;

  constructor(
    private fb: FormBuilder,
    private musicosService: MusicosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = 0; // Inicializa id com um valor padrão
    this.userForm = this.fb.group({}); // Inicializa userForm com um objeto vazio
    this.musico = { // Inicializa musico com valores padrão
      id: -1,
      nome: '',
      telefone: '',
      comun: -1,
      instrumento: Intrumentos.NULL,
      cargo: '',
    };
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: 0,
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      comun: [null, Validators.required],
      instrumento: [null, Validators.required],
      cargo: [null, Validators.required],
    });

    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : 0;
      this.obterMusicoPorId(this.id);
    });
  }

  onSubmit() {
    const userData = this.userForm.value;
    if (this.userForm.valid) {
     console.log(userData);
      this.musicosService.atualizaMusico(userData, this.id).subscribe(
        (musico) => {
          console.log('Músico atualizado:', musico);
          // Adicione qualquer lógica adicional após a atualização bem-sucedida
        },
        (error) => {
          console.error('Erro ao atualizar o músico:', error);
          // Trate o erro, se necessário
        }
      );
    }
  }

  obterMusicoPorId(id: number) {
    this.musicosService.obterMusicoPorId(id).subscribe(
      (data) => {
        this.musico = data;
        this.preencherFormulario();
      },
      (error) => {
        console.error('Erro ao obter o músico:', error);
      }
    );
  }

  preencherFormulario() {
    this.userForm.patchValue({
      id: this.musico.id,
      nome: this.musico.nome,
      telefone: this.musico.telefone,
      comun: this.musico.comun,
      instrumento: this.musico.instrumento,
      cargo: this.musico.cargo,
    });
  }
}
