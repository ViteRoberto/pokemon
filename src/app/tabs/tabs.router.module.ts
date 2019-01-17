import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { DatosPage } from '../datos/datos.page';
import { ListaPage } from '../lista/lista.page';
import { FavsPage } from '../favs/favs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(lista:lista)',
        pathMatch: 'full'
      },
      {
        path: 'lista',
        outlet: 'lista',
        component: ListaPage
      },
      {
        path: 'favs',
        outlet: 'favs',
        component: FavsPage
      },
      {
        path: 'datos/:id/:nombre',
        outlet: 'lista',
        component: DatosPage
      },
      {
        path: 'datos/:id',
        outlet: 'favs',
        component: DatosPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(lista:lista)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
