import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {

  site = 'Joshua Michael Waggoner';
  description = 'Personal website of Joshua Michael Waggoner - Web and Mobile Developer';

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  /**
   * Generates SEO tags using Open Graph. TODO: Lookup
   * @param param0 - The tag object passed in... TODO: String Type
   */
  generateTags({ title = '', description = '' }) {
    this.title.setTitle(this.site);
    this.meta.addTags([
      // Open graph
      {
        name: 'og:title',
        content: title
      },
      {
        name: 'og:description',
        content: description
      },
      {
        name: 'og:url',
        content: `https://joshuamichael.web.app/${this.router.url}`
      }
    ]);
  }
}
