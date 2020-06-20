import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SkillsCollectionService } from 'src/app/services/skills-collection/skills-collection.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkillsCardComponent } from './skills-card/skills-card.component';
import { SkillsChartComponent } from './skills-chart/skills-chart.component';
import { SkillsPageRoutingModule } from './skills-routing.module';
import { SkillsPage } from './skills.page';
import { SkillsBaseComponent } from './skills-base/skills-base.component';

const components = [SkillsCardComponent, SkillsChartComponent, SkillsBaseComponent];
@NgModule({
  imports: [CommonModule, SharedModule, AngularFirestoreModule, SkillsPageRoutingModule],
  declarations: [SkillsPage, ...components],
  providers: [SkillsCollectionService],
})
export class SkillsPageModule {}
