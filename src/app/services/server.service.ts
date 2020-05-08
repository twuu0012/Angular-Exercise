import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from 'https';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  options: RequestOptions;
  headers: Headers;

  constructor(private _http: HttpClient) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });

    this.options = new RequestOptions({ headers: this.headers });
  }
}
