import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchValue = '';
  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
  }
  searchImage() {
    this.giphyService.searchGif(this.searchValue).subscribe(imageRes => {
      this.giphyService.imageData.next(imageRes);
    });
  }
}
