import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";

interface Navigation {
  label: string;
  path?: string;
  icon?: string;
}

const navigationItems: Navigation[] = [
  {
    label: 'About',
    path: 'home/about',
    icon: 'person',
  },
  {
    label: 'Resume',
    path: 'home/resume',
    icon: 'file',
  },
  {
    label: 'Tools',
    path: 'home/tools',
    icon: 'tools',
  },
  {
    label: 'Portfolio',
    path: 'home/portfolio',
    icon: 'portfolio',
  },
  {
    label: 'Contact',
    path: 'home/contact',
    icon: 'mail-forward',
  }
];

@Component({
  selector: 'sds-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  navigationList$: Observable<Navigation[]> | undefined;

  profileImageAddress: string = environment.imageProfileAddress;

  constructor() {
  }

  ngOnInit(): void {
    this.navigationList$ = of(navigationItems);
  }

  protected readonly environment = environment;
}
