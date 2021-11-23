import { fakeAsync, tick } from '@angular/core/testing';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {

  let service: NotificationService;

  beforeEach(() => {
    service = new NotificationService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('call show info notification', fakeAsync(() => {

    const message = 'Info';

    service.showInfoNotification(message);

    expect(service.notificationMessage).toBe(message);
    expect(service.notificationType).toBe('Info');
    expect(service.showNotification).toBe(true);
    expect(service.notificationClass).toBe('show-info');
    expect(service.notificationState).toBe('show');
    expect(service.notificationList).toBe(false);

    tick(3000);

    expect(service.showNotification).toBe(false);
    expect(service.notificationState).toBe('hide');

  }));

  it('call show error notification', fakeAsync(() => {

    const message = 'Error';

    service.showErrorNotification([message]);

    expect(service.notificationMessage).toEqual([message]);
    expect(service.notificationType).toBe('Error');
    expect(service.showNotification).toBe(true);
    expect(service.notificationClass).toBe('show-error');
    expect(service.notificationState).toBe('show');
    expect(service.notificationList).toBe(true);


    tick(3000);

    expect(service.showNotification).toBe(false);
    expect(service.notificationState).toBe('hide');

  }));




});
