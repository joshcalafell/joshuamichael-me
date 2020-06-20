import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.generateTags({
      title: 'Joshua Michael Waggoner - Page Not Found',
      description: 'Page not found'
    });
  }
}
