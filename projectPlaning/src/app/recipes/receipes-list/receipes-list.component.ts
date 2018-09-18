import { Component, OnInit } from '@angular/core';
import {  Receipe } from '../receipe.model'
@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent implements OnInit {
  recipes:Receipe[]=[
    new Receipe('A Test Recipe','This is a simple test','http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg')
  ];
  constructor() {
   
   }

  ngOnInit() {
  }

}
