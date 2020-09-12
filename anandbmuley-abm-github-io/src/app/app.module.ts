import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MongodbSchemaVisualizerComponent } from './mongodb-schema-visualizer/mongodb-schema-visualizer.component';
import { CollectionComponent } from './mongodb-schema-visualizer/collection/collection.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { CreateNewSchemaComponent } from './mongodb-schema-visualizer/create-new-schema/create-new-schema.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { JsonPathExtractorComponent } from './json-path-extractor/json-path-extractor.component';
import { JsonTreeComponent } from './json-path-extractor/json-tree/json-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MongodbSchemaVisualizerComponent,
    CollectionComponent,
    CreateNewSchemaComponent,
    JsonPathExtractorComponent,
    JsonTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    DragDropModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatGridListModule,
    MatTreeModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
