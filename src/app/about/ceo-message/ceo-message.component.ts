import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-message',
  templateUrl: './ceo-message.component.html',
  styleUrls: ['./ceo-message.component.scss']
})
export class CeoMessageComponent implements OnInit {

  title = 'CEO Message';
  constructor() { }

  ngOnInit() {
  }

}
