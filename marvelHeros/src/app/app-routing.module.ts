import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './characters/character/character.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/personagens', pathMatch: 'full'
  },
  {
    path: 'personagens', component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
