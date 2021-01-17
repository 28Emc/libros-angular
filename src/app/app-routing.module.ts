import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroComponent } from './libro/libro.component';
import { EditComponent } from './libro/edit/edit.component';

const routes: Routes = [
  {
    path: 'libros',
    component: LibroComponent,
  },
  {
    path: 'libros/edit/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
