import { Component } from '@angular/core';
import { Model,TodoItem } from './model';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  model = new Model();

  getItems(){
    return this.model.items.filter(item=> !item.durum);
  }
  getItemsChech(){
    return this.model.items.filter(item=> item.durum);
  }
  addItem(value:string){
    if(value!=""){
      this.model.items.push(new TodoItem(value,false));
    }
  }
}
