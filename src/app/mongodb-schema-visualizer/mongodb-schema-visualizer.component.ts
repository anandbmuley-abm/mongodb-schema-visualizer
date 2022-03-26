import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MongoCollection } from './collection/collection.component';
import { PojoGeneratorService } from './pojo-generator.service';
import { Schema } from './create-new-schema/create-new-schema.component';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-mongodb-schema-visualizer',
  templateUrl: './mongodb-schema-visualizer.component.html',
  styleUrls: ['./mongodb-schema-visualizer.component.css']
})
export class MongodbSchemaVisualizerComponent implements OnInit {

  appVersion = "1.0"

  collections: MongoCollection[] = [];

  selectedSchema: Schema = { name: null, definition: null };

  mode: String = "CREATE";

  @ViewChild('screen') visualizationDisplay: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  constructor(private pojoGeneratorService: PojoGeneratorService) { }

  ngOnInit() {
  }

  downloadSnapshot() {
    html2canvas(this.visualizationDisplay.nativeElement, {
      scrollX: 0,
      scrollY: 0,
      height: window.outerHeight + window.innerHeight,
      windowHeight: window.outerHeight + window.innerHeight,
      // windowWidth: this.visualizationDisplay.nativeElement.offsetWidth,
      // windowHeight: this.visualizationDisplay.nativeElement.offsetHeight,
      ignoreElements: (element) => element.className == "ignore-from-screenshot"
    }).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'MongoD Schema Visualization.png';
      this.downloadLink.nativeElement.click();
    });
  }

  openFileBrowser(event: any) {
    event.preventDefault();
    let fileBrowserBtn: HTMLElement = document.getElementById("jsonFileBrowserBtn") as HTMLElement;
    fileBrowserBtn.click();
  }

  editSchema(selectedSchema: Schema) {
    this.selectedSchema = selectedSchema;
    this.mode = "EDIT";
  }

  addNewSchema(schema: Schema) {
    this.collections.push(new MongoCollection(schema.name.toString(), JSON.parse(schema.definition.toString())));
  }

  saveUpdatedSchema(schema: Schema) {
    this.filterMatchingSchema(schema.name);
    this.addNewSchema(schema);
    this.selectedSchema = { name: null, definition: null };
    this.mode = "CREATE";
  }

  filterMatchingSchema(schemaName: String) {
    var filteredCollection = [];
    this.collections.forEach((collection: MongoCollection) => {
      if (collection.name != schemaName) {
        filteredCollection.push(collection);
      }
    });
    this.collections = filteredCollection;
  }

  processFile(file: File) {
    let fileReader = new FileReader()
    fileReader.onload = () => {
      let fileContent = fileReader.result
      let parsedFileContent = JSON.parse(fileContent.toString())
      let fileName = file.name.split(".json")[0]
      this.collections.push(new MongoCollection(fileName, parsedFileContent))
    }
    fileReader.readAsText(file);
  }

  downloadAll() {
    var collection: MongoCollection = this.collections[0];
    this.pojoGeneratorService.generate(collection.getContent(), collection.getName(), false);
    this.pojoGeneratorService.downloadAll();
  }

  loadJsonFile(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      this.processFile(files[index])
    }
  }
}
