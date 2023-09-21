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
  selector: 'sds-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  navigationList$: Observable<Navigation[]> | undefined;

  profileImageUrl!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.navigationList$ = of(navigationItems);
    this.profileImageUrl = 'assets/images/profile-avatar.png'
  }
}
