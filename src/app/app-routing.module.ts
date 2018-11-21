import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DetectLabelsComponent } from './detect-labels/detect-labels.component';
import { FrameWorksComponent } from './frameworks/frameworks.component';

const routes: Routes = [
  {
    /** URLパス */
    path: 'first',
    /** リンクさせるコンポーネント */
    component: FirstComponent
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: 'frameworks',
    component: FrameWorksComponent
  },
  {
    path: 'detect/labels',
    component: DetectLabelsComponent
  },
  /** リダイレクト */
  {
    path: '**',
    redirectTo: 'detect/labels'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
