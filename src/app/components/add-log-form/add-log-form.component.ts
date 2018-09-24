import { Component, OnInit, ViewChild } from '@angular/core';
import { Log } from '../../models/log';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  'selector': 'app-add-log-form',
  'templateUrl': './add-log-form.component.html',
  'styleUrls': ['./add-log-form.component.css']
})

export class AddLogFormComponent implements OnInit {
  logs: Log[];
  log: Log = {
    logName: ''
  };
  logName: string;
  @ViewChild('logForm') form: any;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'logName': new FormControl(
        this.log.logName, [
          Validators.required,
          Validators.minLength(2)
        ]
      )
    });

    this.logs = [{
      logName: 't1',
      logDate: new Date()
    }];
  }

  onSubmit({ value, valid }: { value: Log, valid: boolean}) {
    if (!valid) {
      console.log('form not valid !!!!');
    } else {
      value.logDate = new Date();
      this.logs.unshift(value);
      this.form.reset();
    }
  }

}
