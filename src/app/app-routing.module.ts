import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./pages/skills/skills.module').then((m) => m.SkillsPageModule),
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('./pages/experience/experience.module').then((m) => m.ExperiencePageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactPageModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then((m) => m.NotFoundPageModule),
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
