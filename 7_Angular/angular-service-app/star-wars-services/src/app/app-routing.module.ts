import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [ 
  {path: 'characters', component: TabsComponent, children: [
    // full path needs to be... empty ''
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: ':side', component: ListComponent}
  ]},
  {path: 'new-character', component: CreateCharacterComponent},
  // all - wildcard route
  {path: '**', redirectTo: '/'},
];

@NgModule({
  // registers routes in the angular router module
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
