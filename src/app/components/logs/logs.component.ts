import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Log } from '../../models/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: Array<Log> = [];
  @Output() editLogEventEmitter = new EventEmitter<Log>();
  logIdentify: number;

  constructor() {}

  ngOnInit() {
    // console.log(this.callLog);
    this.logIdentify = 0;
  }

  addNewLog(log: Log) {
    this.logIdentify += 1;
    log.logId = this.logIdentify;
    this.logs.unshift(log);
  }

  deleteLog(log: Log): boolean {

    const logIndex = this.logs.indexOf(log);

    if (logIndex !== -1) {
      this.logs.splice(logIndex, 1);
    }
    return true;
  }

  editLogEvent(log: Log) {

    this.editLogEventEmitter.emit(log);
  }

}
