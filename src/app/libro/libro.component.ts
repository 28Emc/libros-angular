import { Component, OnInit } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { Libro } from './libro.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit {
  libro = new Libro();
  librosArr: any;
  titulo = 'Mantenimiento de Libros';
  mensaje: string;
  alertClass: string;

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.listLibros();
  }

  listLibros() {
    this.libroService.getLibros().subscribe((res) => {
      this.librosArr = res['libros'];
      if (this.librosArr != null || this.librosArr != '') {
        this.mensaje = res['mensaje'];
        this.alertClass = 'alert alert-info';
      } else {
        this.mensaje = 'No hay libros disponibles';
        this.alertClass = 'alert alert-danger';
      }
    });
  }

  addLibro() {
    this.libro.activo = true;
    this.libroService.insertLibro(this.libro).subscribe((res) => {
      this.listLibros();
    });
  }

  deleteLibro(id) {
    this.libroService.deleteLibro(id).subscribe((res) => {
      this.listLibros();
    });
  }
}
