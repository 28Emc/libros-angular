import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from 'src/app/services/libro.service';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: any;
  libro = new Libro();
  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private libroService: LibroService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getLibro();
  }

  getLibro() {
    this.libroService.findLibro(this.id).subscribe((res) => {
      this.data = res;
      this.libro = this.data;
    });
  }

  updateLibro() {
    this.libroService.updateLibro(this.id, this.libro).subscribe((res) => {
      this.router.navigate(['/libros']);
    });
  }
}
