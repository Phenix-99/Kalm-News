import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: Object;
  searchTerm;

  constructor(private apiService: ApiService) {
  }

  ionViewDidEnter(){

    this.apiService.getNews().subscribe((data)=>{
      console.clear();
      console.log(data);
      this.articles = data['articles'];
    });
  }

  searchString(){
    this.apiService.getNewsWithKey(this.searchTerm)
    .subscribe((data)=>{
      console.clear();
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
