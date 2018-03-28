import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title = 'Register';
  angForm: FormGroup;

  constructor(private dataservice: DataService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      acc_owner: ['', Validators.required ],
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      dob: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['', Validators.required ],
      password: ['', Validators.required ],
      acc_type: ['', Validators.required ],
      country: ['', Validators.required ],
      city: ['', Validators.required ],
      security_question: ['', Validators.required ],
      confirm_security_question: ['', Validators.required ],
      security_answer: ['', Validators.required ],
      confirm_security_answer: ['', Validators.required ],
      education: ['', Validators.required ],
      trading_experience: ['', Validators.required ],
      trading_frequency: ['', Validators.required ],
      purpose_of_trading: ['', Validators.required ],
      annual_gross_income: ['', Validators.required ],
      net_worth: ['', Validators.required ],
      income_source: ['', Validators.required ],
      public_position: ['', Validators.required ],
      family_public_position: ['', Validators.required ],
      pref_language: ['', Validators.required ]
   });
  }

  addUser(acc_owner, first_name, last_name, dob, email, phone, password, acc_type, country, city, security_question, confirm_security_question, security_answer, confirm_security_answer, education, trading_experience, trading_frequency, purpose_of_trading, annual_gross_income, net_worth, income_source, public_position, family_public_position, pref_language) {
    this.dataservice.addUser(acc_owner, first_name, last_name, dob, email, phone, password, acc_type, country, city, security_question, confirm_security_question, security_answer, confirm_security_answer, education, trading_experience, trading_frequency, purpose_of_trading, annual_gross_income, net_worth, income_source, public_position, family_public_position, pref_language);
  }

  ngOnInit() {
  }

}
