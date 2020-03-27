import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MongodbSchemaVisualizerComponent } from './mongodb-schema-visualizer/mongodb-schema-visualizer.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'mongodb-schema-visualizer', component: MongodbSchemaVisualizerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
