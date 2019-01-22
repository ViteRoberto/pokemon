import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lista',
        children: [
          {
            path: '',
            loadChildren: '../lista/lista.module#ListaPageModule'
          }
        ]
      },
      {
        path: 'favs',
        children: [
          {
            path: '',
            loadChildren: '../favs/favs.module#FavsPageModule'
          }
        ]
      },
      {
        path: 'datos/:id/:nombre',
        children: [
          {
            path: '',
            loadChildren: '../datos/datos.module#DatosPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
