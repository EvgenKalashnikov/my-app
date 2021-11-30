import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FooterComponent} from './component/footer/footer.component';
import {HeaderComponent} from './component/header/header.component';
import {LogoComponent} from './component/logo/logo.component';
import {CoursesPageComponent} from './component/courses-page/courses-page.component';
import {CourseComponent} from './component/course/course.component';
import {OrderByPipe} from './pipe/order-by.pipe';
import {CourseFilterPipe} from './pipe/course-filter.pipe';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { OutdatedBorderDirective } from './directive/Outdated-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesPageComponent,
    CourseComponent,
    OrderByPipe,
    CourseFilterPipe,
    OutdatedBorderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
