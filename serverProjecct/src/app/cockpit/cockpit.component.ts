import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 newServerName='';
 newServerContent='';
  constructor() { }

  ngOnInit() {
  }
  //onAddServer()
 // {
   // this.serverElements.push({
  //    type:'server',
    //  name:this.newserverName,
   //   content:this.newServerContent
  //  });
  //}
 // onAddBlueprint(){
  //  this.serverElement.push({
  //    type:'blueprint',
  //    name:this.newserverName,
  //    content:this.newServerContent
  //  });
//  }

}
