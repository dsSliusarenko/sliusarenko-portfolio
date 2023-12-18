import {Component} from '@angular/core';
import {MobileMenuStateService} from "../../services/mobile-menu-state.service";

@Component({
  selector: 'sds-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  isMenuShowing: boolean = false;

  constructor(private mobileMenuStateService: MobileMenuStateService) {
    this.mobileMenuStateService.isMobileMenuOpened.subscribe(value => {
      this.isMenuShowing = value
    })
  }

  toggleMobileMenuView(): void {
    this.isMenuShowing = !this.isMenuShowing;
  }
}
