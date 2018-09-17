import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model'
@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent implements OnInit {
  recipes:Receipe[]=[];
  constructor() { }

  ngOnInit() {
  }

}
