import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {NewsModel} from '../..//models/news-model'

/*
  Generated class for the NytApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NytApiProvider {

  private apiUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key={your key}';


  constructor(public http: HttpClient) {}

  getTopStories(page): Observable<NewsModel[]> {
    return this.http.get<NewsModel[]>(this.apiUrl);
 
  }
}