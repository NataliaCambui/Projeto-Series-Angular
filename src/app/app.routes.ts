import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './views/card/card.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './views/detalhes/detalhes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: CardComponent, pathMatch: 'full' },
  { path: '', component: DetalhesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, CommonModule,
    // outros imports
  ],
  exports: [RouterModule],
  providers: [provideHttpClient()]
  // outras configurações
})

export class AppModule { }