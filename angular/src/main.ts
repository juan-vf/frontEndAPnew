import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// export let enviorement = 'https://backapj.onrender.com/';
export let enviorement = 'http://localhost:8080/';
export function  convertDate(ISODate:any):string{
  let newDate = new Date(ISODate);
  let day = newDate.getDate();
  let month = newDate.getMonth()+1;
  let year = newDate.getFullYear();
  return `${day}/${month}/${year}`
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
