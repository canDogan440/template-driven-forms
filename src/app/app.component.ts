import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  formChangesSubscription: any;
  constructor() {}

  @ViewChild('userForm', { static: true }) ngForm!: NgForm;

  ngAfterViewInit(): void {
    this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User(
    '',
    'dogan',
    'can.dogan@adesso.com.tr',
    5556665556,
    'test',
    'default',
    'morning',
    true
  );

  topicHasError = true;

  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {}
}
