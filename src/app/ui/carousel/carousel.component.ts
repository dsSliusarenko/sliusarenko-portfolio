import {Component, Input, OnChanges} from '@angular/core';
import {Technology} from "../../portfolio/portfolio";

@Component({
  selector: 'sds-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnChanges {
  @Input() technologies: Technology[] = [];
  @Input() initSlidesAmount!: number;
  currentIndex = 0;
  visibleTechnologies: Technology[] = [];

  ngOnChanges(): void {
    this.updateVisibleTechnologies();
  }

  updateVisibleTechnologies(): void {
    this.visibleTechnologies = this.technologies.slice(this.currentIndex, this.currentIndex + this.initSlidesAmount);
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.technologies.length - this.initSlidesAmount;
    }
    this.updateVisibleTechnologies();
  }

  nextSlide(): void {
    if (this.currentIndex < this.technologies.length - this.initSlidesAmount) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateVisibleTechnologies();
  }
}
