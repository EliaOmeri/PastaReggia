import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
      
  currentRoute: string = '';

  constructor(private router: Router,private translate: TranslateService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentRoute = val.url;
      }
    });
    translate.setDefaultLang('al');
    translate.use('al');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    sessionStorage.setItem('lang',language);
  }
  ngOnInit(): void {
  }



}
