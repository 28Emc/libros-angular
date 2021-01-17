import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  data: any;

  constructor(private httpClient: HttpClient) {}

  getLibros() {
    return this.httpClient.get('http://127.0.0.1:8000/libros');
  }

  findLibro(id) {
    return this.httpClient.get('http://127.0.0.1:8000/libros/' + id);
  }

  insertLibro(data) {
    return this.httpClient.post('http://127.0.0.1:8000/libros', data);
  }

  updateLibro(id, data) {
    return this.httpClient.patch('http://127.0.0.1:8000/libros/' + id, data);
  }

  deleteLibro(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/libros/' + id);
  }
}
