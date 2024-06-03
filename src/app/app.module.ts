import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComunsComponent } from './comuns/comuns.component';
import { CriarComunsComponent } from './criar-comuns/criar-comuns.component';
import { MusicoListComponent } from './musico-list/musico-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'comuns', component: ComunsComponent },
  { path: 'criar-comuns', component: CriarComunsComponent},
  { path: 'musicolist/:id', component: MusicoListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Adicione outras rotas conforme necessário
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    ComunsComponent,
    CriarComunsComponent,
    MusicoListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
     // Adicione o RouterModule com as rotas
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
