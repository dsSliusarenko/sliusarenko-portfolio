import {Component, OnInit} from '@angular/core';
import {personalInformation} from "../../personal-information";

@Component({
  selector: 'sds-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  protected readonly personalInformation = personalInformation;

  textList: string[] = ["Front-End Developer", "Angular Developer", "Software Developer"];
  currentIndex: number = 0;
  textToShow: string = "";

  constructor() {
  }

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    const typingInterval = 150;

    if (this.currentIndex < this.textList.length) {
      const currentText = this.textList[this.currentIndex];
      let textIndex = 0;

      const typingIntervalId = setInterval(() => {
        if (textIndex < currentText.length) {
          this.textToShow += currentText.charAt(textIndex);
          textIndex++;
        } else {
          clearInterval(typingIntervalId);
          if (this.currentIndex < this.textList.length - 1) {
            setTimeout(() => {
              this.deleteText();
            }, 1500);
          }
        }
      }, typingInterval);
    }
  }

  deleteText(): void {
    const deletingInterval = 75;

    if (this.textToShow.length > 0) {
      const deletingIntervalId = setInterval(() => {
        if (this.textToShow.length > 0) {
          this.textToShow = this.textToShow.slice(0, -1);
        } else {
          clearInterval(deletingIntervalId);
          this.currentIndex++;
          this.typeText();
        }
      }, deletingInterval);
    } else {
      this.currentIndex++;
      this.typeText();
    }
  }
}
