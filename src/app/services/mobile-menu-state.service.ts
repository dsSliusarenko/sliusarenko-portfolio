import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MobileMenuStateService {
  isMobileMenuOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  setIsMobileMenuOpenedFalse(): void {
    this.isMobileMenuOpened.next(false);
  }
}
