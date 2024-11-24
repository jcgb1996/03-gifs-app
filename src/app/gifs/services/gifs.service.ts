import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse,Gif } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  private _tagsHistory:string[] = [];
  public gifList: Gif[] = [];

  private servicesUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'XRrZnQmKXmx52uptBy1bWo1oCOi360KC';


  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void{
     tag = tag.toLowerCase();
     if(this._tagsHistory.includes(tag)){
        this._tagsHistory = this._tagsHistory.filter(x=> x !== tag);
     }
     this._tagsHistory.unshift(tag);
     this._tagsHistory = this._tagsHistory.splice(0,10);
     this.saveLocalStorage();
  }

  private saveLocalStorage() :void {
    localStorage.setItem('history',JSON.stringify(this.tagsHistory));
  }

  private loadLocalStorage(): void{
    if(!localStorage.getItem('history')) return;
    this._tagsHistory =  JSON.parse(localStorage.getItem('history')! );

    if(this._tagsHistory.length === 0 ) return;

    this.searchTags(this._tagsHistory[0]);
  }

  public searchTags(tag : string): void{
    if(tag.length === 0 ) return;
    this.organizeHistory(tag);

    const params: HttpParams = new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', tag)
    .set('limit', '10');


    this.http.get<SearchResponse>(`${this.servicesUrl}/search`,{params})
    .subscribe(res => {
      this.gifList = res.data
    })
  }

}
