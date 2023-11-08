import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Navigation, navigationItems} from "./navigation";

@Component({
  selector: 'sds-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  navigationList$: Observable<Navigation[]> | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.navigationList$ = of(navigationItems);
  }
}
