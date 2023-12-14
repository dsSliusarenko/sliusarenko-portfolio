import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import * as AOS from 'aos';
import {BreakpointService} from "./services/breakpoint.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy{
  title = 'sliusarenko-portfolio';
  isDrawerOpened!: boolean;

  constructor(private breakpointService: BreakpointService) {
    this.breakpointService.isScreenMobile ? this.isDrawerOpened = false : this.isDrawerOpened = true
  }

  ngAfterViewInit() {
    AOS.init();
  }

  ngOnDestroy() {
    this.breakpointService.unsubscribe();
  }
}
