import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';

/**
 * Json node data with nested structure. Each node has a fieldName and a value or a list of children
 */
export class JsonNode {
  children: JsonNode[];
  fieldName: string;
  type: any;
}

/**
 * The Json tree data in string. The data could be parsed into Json object
 */
const TREE_DATA = JSON.stringify({
  Applications: {
    Calendar: 'app',
    Chrome: 'app',
    Webstorm: 'app'
  },
  Documents: {
    angular: {
      src: {
        compiler: 'ts',
        core: 'ts'
      }
    },
    material2: {
      src: {
        button: 'ts',
        checkbox: 'ts',
        input: 'ts'
      }
    }
  },
  Downloads: {
    October: 'pdf',
    November: 'pdf',
    Tutorial: 'html'
  },
  Pictures: {
    'Photo Booth Library': {
      Contents: 'dir',
      Pictures: 'dir'
    },
    Sun: 'png',
    Woods: 'jpg'
  }
});

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has fieldName and type.
 * For a directory, it has fieldName and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `JsonNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<JsonNode[]>([]);
  treeData: JsonNode[]

  get data(): JsonNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `JsonNode` with nested
    //     file node as children.
    this.treeData = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(this.treeData);
  }

  public filter(filterText: string) {
    let filteredTreeData;
    console.log(filterText);
    console.log(this.data);
    if (filterText && filterText.length > 0) {
      filteredTreeData = this.treeData.filter(d => d.fieldName.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1);
    } else {
      // Notify the change.
      filteredTreeData = this.treeData
    }
    this.dataChange.next(filteredTreeData);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `JsonNode`.
   */
  buildFileTree(obj: object, level: number): JsonNode[] {
    return Object.keys(obj).reduce<JsonNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new JsonNode();
      node.fieldName = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

@Component({
  selector: 'json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.css'],
  providers: [FileDatabase]
})
export class JsonTreeComponent {
  nestedTreeControl: NestedTreeControl<JsonNode>;
  nestedDataSource: MatTreeNestedDataSource<JsonNode>;
  private database: FileDatabase

  constructor(database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<JsonNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => {
      this.nestedTreeControl.dataNodes = data;
      this.nestedDataSource.data = data;
      this.nestedTreeControl.expandAll();
    });

    this.database = database


    const referenceToNode = this.database.data
      .find(d => d.fieldName === 'Downloads')

    this.nestedTreeControl.expand(referenceToNode);
  }

  hasNestedChild = (_: number, nodeData: JsonNode) => !nodeData.type;

  private _getChildren = (node: JsonNode) => node.children;

  filterChanged(filterText: string) {
    this.database.filter(filterText);
    if (filterText && filterText.length > 0) {
      this.nestedTreeControl.expandAll();
    } else {
      this.nestedTreeControl.collapseAll();
    }
  }

}
