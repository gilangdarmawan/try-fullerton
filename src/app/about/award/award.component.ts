import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent implements OnInit {

  title = 'Our Awards';
  constructor() { }

  ngOnInit() {
  }

}
