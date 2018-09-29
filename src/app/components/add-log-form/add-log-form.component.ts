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
    logName: '',
    logId: 0
  };

  @ViewChild('logForm') form: any;
  @ViewChild(LogsComponent) logsObj: LogsComponent;

  constructor() { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Log, valid: boolean}) {
    if (!valid) {
      console.log('form not valid !!!!');
    } else {
      if (this.log.logId > 0) {
        const editingLog: Log = {
          logName: this.log.logName,
          logDate: this.log.logDate,
          logId: this.log.logId
        };
        this.logsObj.editLog(editingLog);
        this.log.logId = 0;
        // this.form.reset();
      } else {

        value.logDate = new Date();
        this.logsObj.addNewLog(value);
        this.form.reset();
      }
    }
  }

  editLog($event) {
    this.log.logName =  $event.logName;
    this.log.logId =  $event.logId;
    this.log.logDate =  $event.logDate;
  }

  clearEditLog()  {
    this.form.reset();
  }

}
