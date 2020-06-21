import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { WithLoadingPipe } from './pipes/with-loading/with-loading.pipe';
import { YearsPipe } from './pipes/years/years.pipe';
import { SkeletonListComponent } from './components/skeleton-list/skeleton-list.component';
import { ErrorComponent } from './components/error/error.component';

const modules = [IonicModule];

const components = [
  HeaderComponent,
  FooterComponent,
  SkeletonListComponent,
  ErrorComponent
];

const pipes = [
  WithLoadingPipe,
  YearsPipe
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...components, ...pipes],
})
export class SharedModule {}
