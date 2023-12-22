import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calibrage';
  // isHomeRoute: boolean | undefined;

  // constructor(private router: Router, private route: ActivatedRoute) { }

  // ngOnInit() {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd),
  //     take(1)
  //   ).subscribe(() => {
  //     const data = this.route.snapshot.data;
  //     this.isHomeRoute = data ? data['page'] === 'home' : false;
  //     console.log('isHomeRoute:', this.isHomeRoute);
  //   });
  // }
}
