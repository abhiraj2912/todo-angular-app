import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private htttp:HttpClient) { }

  fetchTodos=()=>{
    return this.htttp.get("https://jsonplaceholder.typicode.com/todos")
  }
}
