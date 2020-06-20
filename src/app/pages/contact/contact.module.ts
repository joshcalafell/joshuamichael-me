import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactPageRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SeoService } from 'src/app/services/seo/seo.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule, // IonicModule
    ContactPageRoutingModule,
  ],
  declarations: [ContactPage],
  providers: [SeoService]
})
export class ContactPageModule {}
