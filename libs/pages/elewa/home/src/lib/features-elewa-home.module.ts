import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { HomepageFooterComponent } from './components/homepage-footer/homepage-footer.component';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomeRoutingModule } from './home.routing';
@NgModule({
  imports: [
    CommonModule,
    LayoutModule,

    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
  ],
  exports: [HomePageComponent, HomeHeroSectionComponent,HomeJobsSectionComponent],
})
export class HomePageModule {}
