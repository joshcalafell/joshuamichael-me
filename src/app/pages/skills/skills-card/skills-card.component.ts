import { Component } from '@angular/core';
import { SkillsBaseComponent } from '../skills-base/skills-base.component';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss'],
})
export class SkillsCardComponent extends SkillsBaseComponent {
  constructor() {
    super();
  }
}
