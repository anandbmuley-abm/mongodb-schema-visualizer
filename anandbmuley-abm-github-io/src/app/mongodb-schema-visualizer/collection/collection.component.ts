import { Component, OnInit, Input } from '@angular/core';

export class MongoCollection {

  name: string
  data: object

  constructor(name: string, data: object) {
    this.name = name
    this.data = data
  }

  getName(): string {
    return this.name;
  }

  getContent(): object {
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

  constructor() { }

  ngOnInit() {
  }

}
