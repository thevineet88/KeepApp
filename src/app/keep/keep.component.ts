import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keep',
  templateUrl: './keep.component.html',
  styleUrls: ['./keep.component.css']
})
export class KeepComponent implements OnInit {

  notesArray = 
    {
      title : '',
      description : ''
    }
  


  count = -1
  constructor() { }

  ngOnInit() {
  }

  // addNote()
  // {
  //   this.notesArray.title = document.getElementById("title").nodeValue
  //   this.notesArray.description = document.getElementById("description").nodeValue
  //   console.log(this.notesArray)
  // }
  
  onEnterTitle(value: string) { 
  
    //this.notesArray.title = value; 
    //this.notesArray.tite
   // console.log(this.notesArray.title)
   let t = value
   console.log(t)
   //this.notesArray.push(titl)
    
   console.log(this.count)
    // console.log(this.t,this.d)
    this.notesArray.title = t
  
  }

  onEnterDesc(value: string) { 
    //this.notesArray.description = value; 
    //this.notesArray.tite
    //console.log(this.notesArray.description)
    let d = value;
    // console.log(this.t,this.d)
    this.notesArray.description = d

    console.log(this.notesArray)
}
}

