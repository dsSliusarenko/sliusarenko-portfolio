import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import * as AOS from 'aos';
import {BreakpointService} from "./services/breakpoint.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'Dmytro Sliusarenko';
  isDrawerOpened!: boolean;

  constructor(private breakpointService: BreakpointService) {
    this.breakpointService.isScreenMobile ? this.isDrawerOpened = false : this.isDrawerOpened = true
  }

  ngAfterViewInit(): void {
    AOS.init();
  }

  ngOnDestroy(): void {
    this.breakpointService.unsubscribe();
  }
}
