import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationMessage: string | string[] = '';
  notificationType = 'Info';
  showNotification = false;
  notificationTimerHandle: any = null;

  showInfoNotification(value: string | string[]) {
    this.notificationMessage = value;
    this.notificationType = 'Info';
    this.showNotification = true;

    if (this.notificationTimerHandle) {
      clearTimeout(this.notificationTimerHandle);
    }

    this.notificationTimerHandle = setTimeout(() => {
      this.hideNotification();
    }, 3000);
  }

  showErrorNotification(value: string | string[]) {
    this.notificationMessage = value;
    this.notificationType = 'Error';
    this.showNotification = true;

    if (this.notificationTimerHandle) {
      clearTimeout(this.notificationTimerHandle);
    }

    this.notificationTimerHandle = setTimeout(() => {
      this.hideNotification();
    }, 3000);
  }

  hideNotification() {
    this.showNotification = false;
  }

  get notificationClass() {
    return this.notificationType === 'Error' ? 'show-error' : 'show-info';
  }

  get notificationState() {
    return this.showNotification ? 'show' : 'hide';
  }

  get notificationList() {
    return Array.isArray(this.notificationMessage);
  }

}
