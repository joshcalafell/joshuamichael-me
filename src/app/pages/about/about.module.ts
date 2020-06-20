import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { CommonModule } from '@angular/common';
import { SeoService } from 'src/app/services/seo/seo.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule, // IonicModule,
    AboutPageRoutingModule,
  ],
  declarations: [AboutPage],
  providers: [SeoService]
})
export class AboutPageModule {}
