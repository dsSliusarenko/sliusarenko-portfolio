import {Component, Input, OnChanges} from '@angular/core';
import {Technology} from "../../portfolio/portfolio";

@Component({
  selector: 'sds-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnChanges {
  @Input() slides!: Technology[];
  @Input() initSlidesAmount!: number;
  currentIndex = 0;
  visibleSlides!: Technology[];

  ngOnChanges(): void {
    this.updateVisibleSlides();
  }

  updateVisibleSlides(): void {
    this.visibleSlides = this.slides.slice(this.currentIndex, this.currentIndex + this.initSlidesAmount);
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - this.initSlidesAmount;
    }
    this.updateVisibleSlides();
  }

  nextSlide(): void {
    if (this.currentIndex < this.slides.length - this.initSlidesAmount) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleSlides();
  }
}
