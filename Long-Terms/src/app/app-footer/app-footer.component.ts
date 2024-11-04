import { Component } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent {
  openFacebookLink() {
    const fbLink = 'https://www.facebook.com/your-page';
    window.open(fbLink, '_blank');
  }
  openTwitterLink() {
    const fbLink = 'https://www.x.com/your-page';
    window.open(fbLink, '_blank');
  }
  openGoogleLink() {
    const fbLink = 'https://www.Google.com';
    window.open(fbLink, '_blank');
  }
  openInstagramLink() {
    const fbLink = 'https://www.Instagram.com';
    window.open(fbLink, '_blank');
  }

}
