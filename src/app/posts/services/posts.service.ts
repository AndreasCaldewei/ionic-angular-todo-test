import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'https://jsonplaceholder.typicode.com/photos';

  posts$ () {
    return this.httpClient.get(this.url)
  }

  constructor(
      private httpClient: HttpClient
  ) { }
}
