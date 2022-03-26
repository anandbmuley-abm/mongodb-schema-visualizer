import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Schema } from '../create-new-schema/create-new-schema.component';

export class MongoCollection {

  name: String
  data: String

  constructor(name: string, data: String) {
    this.name = name
    this.data = data
  }

  getName(): String {
    return this.name;
  }

  getContent(): String {
    return this.data;
  }

}


@Component({
  selector: 'mongo-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() collection: MongoCollection
  @Output() onSelectingSchema = new EventEmitter<Schema>();

  constructor() { }

  ngOnInit() {
  }

  editSchema() {
    // var parsedJSON = JSON.parse(this.schema.definition.toString());
    // this.schema.definition = JSON.stringify(parsedJSON, null, "\t");
    this.onSelectingSchema.emit({
      name: this.collection.name,
      definition: JSON.stringify(this.collection.data, null, "\t")
    });
  }

}
