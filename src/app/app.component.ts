import {AfterViewInit, Component} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'sliusarenko-portfolio';

  ngAfterViewInit() {
    AOS.init();
  }
}
