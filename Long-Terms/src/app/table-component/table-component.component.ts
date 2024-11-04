import { Component , Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit{
     selectColor : string = "";
  @Input()  headArray : string[] | undefined= [] ;
  @Input()  gridArray : any[] | undefined= [] ;

  ngOnInit(): void {
    
  }



}
