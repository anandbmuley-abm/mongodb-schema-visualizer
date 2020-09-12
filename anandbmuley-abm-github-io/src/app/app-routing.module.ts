import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MongodbSchemaVisualizerComponent } from './mongodb-schema-visualizer/mongodb-schema-visualizer.component';
import { JsonPathExtractorComponent } from './json-path-extractor/json-path-extractor.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'mongodb-schema-visualizer', component: MongodbSchemaVisualizerComponent
  },
  {
    path: 'json-path-extractor', component: JsonPathExtractorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
