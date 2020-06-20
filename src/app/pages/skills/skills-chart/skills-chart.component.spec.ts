import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillsChartComponent } from './skills-chart.component';

describe('SkillsChartComponent', () => {
  let component: SkillsChartComponent;
  let fixture: ComponentFixture<SkillsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsChartComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  afterEach(async(() => {
    component.title = undefined;
    component.items = undefined;
  }));

  it('should create', () => {
    component.title = 'Frameworks';
    component.items = [{ name: 'Angular', years: 6 }];
    component.ngAfterViewInit();
    expect(component).toBeTruthy();
  });
});
