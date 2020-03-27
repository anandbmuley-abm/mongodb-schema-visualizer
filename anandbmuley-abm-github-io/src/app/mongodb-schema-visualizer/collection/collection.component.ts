import { Component, OnInit, Input } from '@angular/core';

export class Collection {

  name: string
  data: object

  constructor(name: string, data: object) {
    this.name = name
    this.data = data
  }

}


@Component({
  selector: 'mongo-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() collection: Collection

  constructor() { }

  ngOnInit() {
  }

}
