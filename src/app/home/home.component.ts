import { Component, OnInit } from '@angular/core';
import {Http,Headers,Response} from '@angular/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:Http) { }
  products=[];
  fetchData(){
    this.http.get('http://localhost:5555/products').subscribe(
      (resp:Response)=>{
        this.products = resp.json();
      }
    )
  }  
  ngOnInit() {
    this.fetchData();
  }

}
