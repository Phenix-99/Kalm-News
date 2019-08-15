import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'YOUR_API_KEY';
  countryCode = 'FR';

  constructor(private httpClient: HttpClient) { 

  }
  getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=${this.countryCode}&pageSize=5&apiKey=${this.API_KEY}`);
  }
  getNewsWithKey(key: String){
    return this.httpClient.get(`https://newsapi.org/v2/everything?q=${key}&pageSize=5&apiKey=${this.API_KEY}`);
  }
}
