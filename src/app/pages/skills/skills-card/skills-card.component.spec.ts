import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillsCardComponent } from './skills-card.component';

describe('SkillsCardComponent', () => {
  let component: SkillsCardComponent;
  let fixture: ComponentFixture<SkillsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
