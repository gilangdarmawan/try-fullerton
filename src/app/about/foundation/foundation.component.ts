import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.scss']
})
export class FoundationComponent implements OnInit {

  title = 'We are M.A.D.!';
  constructor() { }

  ngOnInit() {
  }

}
