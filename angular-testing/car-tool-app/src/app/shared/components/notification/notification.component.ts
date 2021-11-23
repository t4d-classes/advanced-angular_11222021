import { Component, OnInit } from '@angular/core';
import {
  trigger, state, style, animate, transition,
 } from '@angular/animations';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('showHide', [
      state('show', style({
        visibility: 'visible',
        opacity: 1,
      })),
      state('hide', style({
        visibility: 'hidden',
        opacity: 0,
      })),
      transition('show => hide', [
        animate('0.75s'),
      ]),
      transition('hide => show', [
        animate('0.75s'),
      ]),
    ])
  ]
})
export class NotificationComponent implements OnInit {

  constructor(
    private notificationSvc: NotificationService,
  ) { }

  ngOnInit() {
  }

}
