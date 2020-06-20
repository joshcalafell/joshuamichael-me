import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundPageRoutingModule } from './not-found-routing.module';
import { NotFoundPage } from './not-found.page';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SharedModule, NotFoundPageRoutingModule],
  declarations: [NotFoundPage],
})
export class NotFoundPageModule {}
