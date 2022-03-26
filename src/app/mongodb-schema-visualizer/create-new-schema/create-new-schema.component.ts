import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


export interface Schema {
  name: String
  definition: String
}

@Component({
  selector: 'visualizer-create-new-schema',
  templateUrl: './create-new-schema.component.html',
  styleUrls: ['./create-new-schema.component.css']
})
export class CreateNewSchemaComponent implements OnInit {

  @Output() onAdd = new EventEmitter<Schema>();
  @Output() onSave = new EventEmitter<Schema>();

  @Input() schema: Schema = { name: null, definition: null };

  @Input() mode: String = "CREATE";

  constructor() { }

  ngOnInit() {
  }

  formatContent() {
    var parsedJSON = JSON.parse(this.schema.definition.toString());
    this.schema.definition = JSON.stringify(parsedJSON, null, "\t");
  }

  addSchema() {
    this.onAdd.emit(this.schema);
    this.schema = { name: null, definition: null };
  }

  saveSchema() {
    this.onSave.emit(this.schema);
    this.schema = { name: null, definition: null };
  }

}
