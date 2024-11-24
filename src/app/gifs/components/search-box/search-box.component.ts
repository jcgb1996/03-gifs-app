import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {

    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

    constructor(private gifsService: GifsService){}
    //searchTag(newTag :string): void {

    //        console.log(newTag);
    //  }

    searchTag(): void {
        const newTag = this.tagInput.nativeElement.value;
        this.gifsService.searchTags(newTag);
        this.tagInput.nativeElement.value = '';
    }


}
