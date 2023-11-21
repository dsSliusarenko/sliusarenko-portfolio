import {Component, Input} from '@angular/core';

@Component({
  selector: 'sds-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],

})
export class CarouselComponent {
  @Input() slidesContent!: any[];

  slides = Array.from({ length: 10 }, (_, i) => i + 1);
  currentIndex = 0;
  visibleSlides: number[] = [];

  constructor() {
      this.updateVisibleSlides();
  }

  updateVisibleSlides() {
    // this.visibleSlides = this.slides.slice(this.currentIndex, this.currentIndex + 4);
    this.visibleSlides = this.slides.slice(this.currentIndex, this.currentIndex + 4);
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 4;
    }
    this.updateVisibleSlides();
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 4) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleSlides();
  }

}
