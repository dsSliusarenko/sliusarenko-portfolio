import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'sds-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('content') content!: ElementRef;

  constructor() {}

  scrollToTop() {
    this.content.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const button = document.querySelector('.scroll-to-top');

    if (button) {
      if (scrollTop > 100) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    }
  }

  // ngOnInit() {
  //   this.setupScrollToTopButton();
  // }
  //
  // setupScrollToTopButton() {
  //   const scrollToTopButton = document.getElementById('scrollToTopButton');
  //
  //   scrollToTopButton!.addEventListener('click', () => {
  //     // Плавна прокрутка до верху сторінки
  //
  //   });
  // }

  // scrollToTop(): void {
  //   console.log('true')
  //   window.scrollTo({top: 0, behavior: 'smooth'});
  // }

}
