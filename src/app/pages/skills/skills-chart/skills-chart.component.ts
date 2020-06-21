import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BarChart } from '../../../models/bar-chart.model';
import { SkillsBaseComponent } from '../skills-base/skills-base.component';

@Component({
  selector: 'app-skills-chart',
  templateUrl: './skills-chart.component.html',
  styleUrls: ['./skills-chart.component.scss'],
})
export class SkillsChartComponent extends SkillsBaseComponent implements AfterViewInit {
  @ViewChild('barChart',  {static: true}) barChart: { nativeElement: HTMLCanvasElement; };

  chart: BarChart;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    if (this.items) {
      this.chart = this.createBarChart({
        elem: this.barChart.nativeElement,
        labels: this.items.map(x => x.name),
        data: this.items.map(x => x.years)
      });
    }
  }

  private createBarChart({ elem, labels, data }: {
    elem: HTMLCanvasElement;
    labels: string[];
    data: number[];
  }): BarChart {
    return new BarChart({
      elem,
      labels,
      data
    });
  }

}
