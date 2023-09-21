import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

interface Navigation {
  label: string;
  path?: string;
  icon?: string;
}

const navigationItems: Navigation[] = [
  {
    label: 'Resume',
    path: 'home/resume',
    icon: 'file',
  },
  {
    label: 'Resume',
    path: 'home/resume',
    icon: 'file',
  }
];

@Component({
  selector: 'sds-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationList$: Observable<Navigation[]> | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.navigationList$ = of(navigationItems);
  }
}
