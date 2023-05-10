import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateExpService {

  constructor() { }

  $modal = new EventEmitter<any>();
}
