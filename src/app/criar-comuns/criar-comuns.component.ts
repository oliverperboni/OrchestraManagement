import { Component } from '@angular/core';
import { ComunsService } from '../services/comuns.service';
import { Comuns } from '../types/comuns';

@Component({
  selector: 'app-criar-comuns',
  templateUrl: "./criar-comuns.component.html",
})
export class CriarComunsComponent {
 comum : Comuns = {
  name :"",
  regiao :0
 }
  constructor(private comunsService: ComunsService) {}

  criarComun() {
    this.comunsService.criarComun(this.comum)
      .subscribe(
        () => {
          console.log('Comum criada com sucesso');
          this.comum = {
            name :"",
            regiao :0
           } // Limpar o campo de entrada após o envio bem-sucedido
        },
        error => {
          console.error('Erro ao criar comum', error);
        }
      );
  }
}
