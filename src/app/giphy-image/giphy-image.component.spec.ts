import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyImageComponent } from './giphy-image.component';

describe('GiphyImageComponent', () => {
  let component: GiphyImageComponent;
  let fixture: ComponentFixture<GiphyImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
