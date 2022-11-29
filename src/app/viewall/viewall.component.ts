import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent {
  
  constructor(private api:ApiService){
    api.fetchTodos().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  
  
  data:any=[]

}
