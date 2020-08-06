import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphyImageComponent } from './giphy-image/giphy-image.component';

const routes: Routes = [
  {
    path: '',component: GiphyImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
