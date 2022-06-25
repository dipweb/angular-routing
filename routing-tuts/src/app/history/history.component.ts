import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { book } from '../books'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyBook
  name
  constructor( private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.historyBook=book.history
    console.log(book)
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log("Name=========",this.name)
    });
  }

}
