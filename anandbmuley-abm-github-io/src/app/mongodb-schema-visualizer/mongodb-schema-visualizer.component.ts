import { Component, OnInit } from '@angular/core';
import { Collection } from './collection/collection.component';
import { PojoGeneratorService } from './pojo-generator.service';

@Component({
  selector: 'app-mongodb-schema-visualizer',
  templateUrl: './mongodb-schema-visualizer.component.html',
  styleUrls: ['./mongodb-schema-visualizer.component.css']
})
export class MongodbSchemaVisualizerComponent implements OnInit {

  collections = []

  constructor(private pojoGeneratorService: PojoGeneratorService) { }

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

  downloadAll() {
    var collection: Collection = this.collections[0];
    this.pojoGeneratorService.generate(collection.getContent(), collection.getName(), false);
    this.pojoGeneratorService.downloadAll();
  }

  loadJsonFile(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      this.processFile(files[index])
    }
  }
}
