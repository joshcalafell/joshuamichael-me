import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skills-base',
  template: '',
})
export class SkillsBaseComponent {
  @Input() title: string;
  @Input() items: Skill[];
  constructor() { }
}
