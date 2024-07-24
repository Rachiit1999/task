import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consumer } from './consumer';

@Injectable({
  providedIn: 'root',
})
export class ConsumerService {
  constructor(private http: HttpClient) {}

  getConsumer(): Observable<Consumer[]> {
    return this.http.get<Consumer[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
