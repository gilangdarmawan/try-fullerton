import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class DataService {

  // private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  // goal = this.goals.asObservable();

  constructor(private http: HttpClient) {}

  // changeGoal(goal) {
  //   this.goals.next(goal)
  // }

  addUser(acc_owner, first_name, last_name, dob, email, phone, password, acc_type, country, city, security_question, confirm_security_question, security_answer, confirm_security_answer, education, trading_experience, trading_frequency, purpose_of_trading, annual_gross_income, net_worth, income_source, public_position, family_public_position, pref_language) {
    const uri = 'http://192.168.0.102:8080/acc/registerlive';
    const obj = {
      acc_owner: acc_owner,
      first_name: first_name,
      last_name: last_name,
      dob: dob,
      email: email,
      phone: phone,
      password: password,
      acc_type: acc_type,
      country:country,
      city:city,
      security_question:security_question,
      confirm_security_question:confirm_security_question,
      security_answer:security_answer,
      confirm_security_answer:confirm_security_answer,
      education:education,
      trading_experience:trading_experience,
      trading_frequency:trading_frequency,
      purpose_of_trading:purpose_of_trading,
      annual_gross_income:annual_gross_income,
      net_worth:net_worth,
      income_source:income_source,
      public_position:public_position,
      family_public_position:family_public_position,
      pref_language:pref_language
    };
    this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  getUser() {
    const uri = 'http://192.168.0.102:8080/acc/listacc';
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }

  editUser(id) {
    const uri = 'http://192.168.0.102:8080/acc/listacc' + id;
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }


}