import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skills-base',
  template: '',
})
export class SkillsBaseComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() items: Skill[];
  constructor() { }
  ngOnInit() {}
  ngAfterViewInit() {}
}
