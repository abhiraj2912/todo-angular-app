import { Component } from '@angular/core';

@Component({
  selector: 'app-addto',
  templateUrl: './addto.component.html',
  styleUrls: ['./addto.component.css']
})
export class AddtoComponent {

  userId=""
  id=""
  title=""
  completed=""

  readValues=()=>{
    let data={"userId": this.userId,"id": this.id,"title": this.title,"completed": this.completed}
    console.log(data)
  }

}
