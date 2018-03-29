import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {

  user: any;
  angForm: FormGroup;
  title = 'Edit User';

  constructor(private route: ActivatedRoute, private router: Router, private service: DataService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required]
    });
  }

  updateUser(first_name) {
    this.route.params.subscribe(params => {
      this.service.updateUser(first_name, params['id']);
      this.router.navigate(['fullerton']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.service.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }

}

