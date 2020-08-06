import { Component, OnInit, OnDestroy } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-giphy-image',
  templateUrl: './giphy-image.component.html',
  styleUrls: ['./giphy-image.component.css']
})
export class GiphyImageComponent implements OnInit, OnDestroy {
  imageData: any;
  noResultFlag = true;
  message = 'Search Images will be displayed here';
  giphySubscription: Subscription;
  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    this.giphySubscription = this.giphyService.imageData.subscribe(res => {
      if (res && res.data.length > 0) {
        this.imageData = res.data;
        this.noResultFlag = false;
      } else if (res != null) {
        this.noResultFlag = true;
        this.message = 'No Images found';
      }
    })
  }
  ngOnDestroy () {
    this.giphySubscription && this.giphySubscription.unsubscribe();
  }
}
