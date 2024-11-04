import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-pick',
  templateUrl: './color-pick.component.html',
  styleUrls: ['./color-pick.component.css']
})
export class ColorPickComponent {

  @Output() colorSelected = new EventEmitter<string>();

  colors = ['red' , 'green', 'yellow'];

  selectColor(color : any){
 
    this.colorSelected.emit(color);

  }

}
