import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameWorksComponent } from './frameworks/frameworks.component';
import { SelectFrameworkComponent } from './frameworks/select-framework/select-framework.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DetectLabelsComponent } from './detect-labels/detect-labels.component';
import { AwsService } from './services/aws.service';

@NgModule({
  declarations: [
    AppComponent,
    FrameWorksComponent,
    SelectFrameworkComponent,
    FirstComponent,
    SecondComponent,
    DetectLabelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AwsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
