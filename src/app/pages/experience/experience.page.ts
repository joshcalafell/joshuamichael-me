import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {

  items = [
    'Planning and development of features for both greenfield and enterprise applications',
    'Writing extensive developer and user documentation',
    'Isolating and fixing bugs',
    'Writing unit tests, integration tests, and E2E tests',
    'Participating in team code review processes',
    'Working on internationalization (i18n) to translate apps',
    'Pair programming and TDD as a way of life',
    'Working with back-end developers to create APIs',
    'CI (Continuous Integration) pipelines for delivering new work',
    'Working with git, branches, and git-flow',
    'Using RESTful APIs as well as WebSocket technologies',
    'Participating in scrums, and both Agile and KanBan process',
    'Management and Team Lead Experience',
    'Training and educating junior team members'
  ];

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.generateTags({
      title: 'Joshua Michael Waggoner - Experience',
      description: 'My experiences gained in the workplace'
    });
  }

}
