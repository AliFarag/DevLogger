import { Component, OnInit, ViewChild } from '@angular/core';
import { Log } from '../../models/log';
import { LogsComponent } from '../logs/logs.component';

@Component({
  'selector': 'app-add-log-form',
  'templateUrl': './add-log-form.component.html',
  'styleUrls': ['./add-log-form.component.css']
})

export class AddLogFormComponent implements OnInit {

  log: Log = {
    logName: ''
  };
  cancel: boolean;
  add: boolean;
  @ViewChild('logForm') form: any;
  @ViewChild(LogsComponent) logsObj: LogsComponent;

  constructor() { }

  ngOnInit() {
    this.cancel =  false;
    this.add = true;
  }

  onSubmit({ value, valid }: { value: Log, valid: boolean}) {
    if (!valid) {
      console.log('form not valid !!!!');
    } else {
      value.logDate = new Date();
      this.logsObj.addNewLog(value);
      this.form.reset();
    }
  }

  editLog($event) {
    this.log = $event;
    this.cancel = true;
    this.add = false;
  }

  clearEditLog()  {
    this.cancel = false;
    this.log = {
      logName: ''
    };
    this.form.reset();
    this.add = true;

  }

}
