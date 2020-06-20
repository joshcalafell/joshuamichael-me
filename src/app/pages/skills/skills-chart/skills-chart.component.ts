import { AfterViewInit, Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { BarChart } from '../../../models/bar-chart.model';
import { SkillsBaseComponent } from '../skills-base/skills-base.component';

@Component({
  selector: 'app-skills-chart',
  templateUrl: './skills-chart.component.html',
  styleUrls: ['./skills-chart.component.scss'],
})
export class SkillsChartComponent extends SkillsBaseComponent {
  @ViewChild('barChart',  {static: true}) barChart: { nativeElement: HTMLCanvasElement; };

  chart: BarChart;

  constructor() {
    super();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.items) {
      this.chart = this.createBarChart({
        elem: this.barChart.nativeElement,
        labels: this.items.map(x => x.name),
        years: this.items.map(x => x.years)
      });
    }
  }

  private createBarChart({ elem, labels, years }: {
    elem: HTMLCanvasElement;
    labels: string[];
    years: number[];
  }): BarChart {
    return new BarChart({
      elem,
      labels,
      years
    });
  }

}
