import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fullerton',
  templateUrl: './fullerton.component.html',
  styleUrls: ['./fullerton.component.scss']
})
export class FullertonComponent implements OnInit {

  users: any;
  constructor(private http: HttpClient, private service: DataService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.service.getUser().subscribe(res => {
      this.users = res;
    });
  }

}
