import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/models/skill.model';
import { SeoService } from 'src/app/services/seo/seo.service';
import { SkillsCollectionService } from 'src/app/services/skills-collection/skills-collection.service';
import { DisplayType } from 'src/app/pages/skills/display-type.enum';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

  displayType = DisplayType.List;

  technologies$: Observable<Skill[]>;
  languages$: Observable<Skill[]>;
  frameworks$: Observable<Skill[]>;

  constructor(
    private collection: SkillsCollectionService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    // Collections
    this.technologies$ = this.collection.getComputerTechnologies().valueChanges();
    this.languages$ = this.collection.getComputerLanguages().valueChanges();
    this.frameworks$ = this.collection.getComputerFrameworks().valueChanges();

    // SEO
    this.seo.generateTags({
      title: 'Joshua Michael Waggoner - Skills',
      description: 'Languages, frameworks, and technologies used extensively by me'
    });
  }

  /**
   * Sets the display type enum
   * @param displayType - The type string passed in
   */
  setDisplayType(displayType: string): void {
    if (displayType === 'list') {
      this.displayType = DisplayType.List;
    } else if (displayType === 'chart') {
      this.displayType = DisplayType.Chart;
    } else {
      throw new Error('Unknown display type in event value');
    }
  }

}
