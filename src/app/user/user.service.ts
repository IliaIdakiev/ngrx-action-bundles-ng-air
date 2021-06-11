import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadUsers = () => this.http.get<any[]>('http://jsonplaceholder.typicode.com/users');

  loadUser = (id: number) => this.http.get<any>('http://jsonplaceholder.typicode.com/users/' + id);

}
