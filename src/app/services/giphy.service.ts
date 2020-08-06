import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey = environment.apiKey;
  imageData = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  searchGif (searchText) {
    return this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&limit=40&q=${searchText}`)
  }
}
