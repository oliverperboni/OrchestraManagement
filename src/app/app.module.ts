import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComunsComponent } from './comuns/comuns.component';
import { CriarComunsComponent } from './criar-comuns/criar-comuns.component';
import { MusicoListComponent } from './musico-list/musico-list.component';
import { FormMusicoComponent } from './form-musico/form-musico.component'
import { CriarMusicoComponent } from './criar-musico/criar-musico.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'comuns', component: ComunsComponent },
  { path: 'criar-comuns', component: CriarComunsComponent},
  { path: 'musicolist/:id', component: MusicoListComponent },
  { path: 'register', component: FormMusicoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Adicione outras rotas conforme necessário
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    ComunsComponent,
    CriarComunsComponent,
    MusicoListComponent,
    FormMusicoComponent,
    CriarMusicoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
     // Adicione o RouterModule com as rotas
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
