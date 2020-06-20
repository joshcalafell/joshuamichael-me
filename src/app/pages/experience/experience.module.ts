import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExperiencePageRoutingModule } from './experience-routing.module';
import { ExperiencePage } from './experience.page';

@NgModule({
  imports: [CommonModule, SharedModule, ExperiencePageRoutingModule],
  declarations: [ExperiencePage],
  providers: [SeoService],
})
export class ExperiencePageModule {}
