import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { Observable } from 'rxjs';

// let pSubscriberCount = 0;

// const p = new Promise(resolve => {

//   let subscriberId = ++pSubscriberCount;

//   console.log("call promise async op");

//   setTimeout(() => {
//     resolve('subscriber id: ' + subscriberId + ' counter: ' + 1);
//   }, 1500);
// });

// p.then(result => {
//   console.log('p result: ' + result);
// });
// p.then(result => {
//   console.log('p result: ' + result);
// });
// observable

// const o = new Observable(subscriber => {

//   let counter = 0;

//   const handle = setInterval(() => {

//     if (subscriber.closed) {
//       window.clearInterval(handle);
//       return;
//     }

//     subscriber.next('counter: ' + ++counter);
//     console.log("ran interval");

//   }, 500);

//   setTimeout(() => {
//     window.clearInterval(handle);
//     subscriber.complete();
//   }, 10000);
  
// });

// const subscription = o.subscribe({
//   next: (result) => {
//     console.log('o result: ' + result);
//   },
//   complete: () => {
//     console.log('all done');
//   }
// });

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 5000);

// o.subscribe({
//   next: (result) => {
//     console.log('o result: ' + result);
//   }
// })


