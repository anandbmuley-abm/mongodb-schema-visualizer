import { Component, OnInit } from '@angular/core';
import { Collection } from './collection/collection.component';

@Component({
  selector: 'app-mongodb-schema-visualizer',
  templateUrl: './mongodb-schema-visualizer.component.html',
  styleUrls: ['./mongodb-schema-visualizer.component.css']
})
export class MongodbSchemaVisualizerComponent implements OnInit {

  collections = []

  constructor() { }

  ngOnInit() {
  }

  processFile(file: File) {
    let fileReader = new FileReader()
    fileReader.onload = () => {
      let fileContent = fileReader.result
      let parsedFileContent = JSON.parse(fileContent.toString())
      let fileName = file.name.split(".json")[0]
      this.collections.push(new Collection(fileName, parsedFileContent))
    }
    fileReader.readAsText(file);
  }

  loadJsonFile(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      this.processFile(files[index])
    }
  }
}
