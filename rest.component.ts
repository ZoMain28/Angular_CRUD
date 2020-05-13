import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  name : string = "";

  responseBack : any;

  constructor(private httpRef : HttpClient) { }

  ngOnInit() {
    // // this.httpRef.get("restUrlToHit");
    //   let obs = this.httpRef.get("http://localhost:5003/service/all");
    //  obs.subscribe((responseBack) => console.log(responseBack));  
  }

  // This method searches for a particular user on git
  searchForUser(){
    let obs = this.httpRef.get("http://localhost:5003/service/all" + this.name);
    obs.subscribe((responseBack) => {
    this.responseBack = responseBack;
    console.log(this.responseBack);
    });
  }

}
