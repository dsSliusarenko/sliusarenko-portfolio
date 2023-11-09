import {Component, OnInit} from '@angular/core';
import {filter, Observable, of} from "rxjs";
import {Navigation, navigationItems} from "./navigation";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'sds-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  navigationList$: Observable<Navigation[]> | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.navigationList$ = of(navigationItems);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      const elementId = this.route.snapshot.firstChild?.url[0]?.path;
      this.scrollToComponent(<string>elementId);
    });
  }

  scrollToComponent(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
