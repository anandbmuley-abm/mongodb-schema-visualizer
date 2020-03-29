import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

export class PojoEnum {
  name: String;
  values: String[];

  constructor(name: String, data: String) {
    this.name = name;
    var enums = data.split("Enum - ");
    this.values = enums[1].trim().split(",");
  }

  firstCharToUpperCase(name: String): String {
    let firstCharUpperCase = name.charAt(0).toUpperCase();
    return firstCharUpperCase + name.substr(1);
  }

  getDisplayForm(): String {
    var enumDeclaration = "\tpublic enum " + this.firstCharToUpperCase(this.name) + " {\n\t\t";
    this.values.forEach(value => {
      enumDeclaration += value.toUpperCase() + ",";
    });
    enumDeclaration += "\n\t}\n\n";
    return enumDeclaration;
  }

}

export class PojoClass {
  private name: String;
  private fields: PojoField[];
  private nested: Boolean;
  private pojoEnum: PojoEnum;

  constructor(name: String, nested: Boolean) {
    this.name = name;
    this.fields = [];
    this.nested = nested;
  }

  addField(pojoField: PojoField) {
    if (pojoField.isEnum()) {
      this.pojoEnum = new PojoEnum(pojoField.getName(), pojoField.getDataType());
      pojoField = new PojoField(pojoField.getName(), pojoField.getName());
    }
    this.fields.push(pojoField);
  }

  getName(): String {
    return this.name;
  }

  getClassName() {
    var dynamicClassName = !this.nested ? this.name.substring(0, this.name.length - 1) : this.name;
    return this.firstCharToUpperCase(dynamicClassName);
  }

  firstCharToUpperCase(name: String): String {
    let firstCharUpperCase = name.charAt(0).toUpperCase();
    return firstCharUpperCase + name.substr(1);
  }

  getCollectionName() {
    return this.name.toLowerCase();
  }

  getDisplayForm(): String {
    var classDisplayForm = "";
    if (!this.nested) {
      classDisplayForm += "@Document(collection = \"" + this.getCollectionName() + "\")\n";
    }
    classDisplayForm += "public class " + this.getClassName() + " {\n\n";

    if (this.pojoEnum) {
      classDisplayForm += this.pojoEnum.getDisplayForm();
    }

    for (var field of this.fields) {
      classDisplayForm = classDisplayForm + field.getDisplayForm()
    }

    for (var field of this.fields) {
      classDisplayForm = classDisplayForm + field.getGetterSetters()
    }

    classDisplayForm += "\n\n}";
    return classDisplayForm;
  }

}

export class PojoField {
  private name: String
  private datatype: String

  constructor(name: String, datatype: String) {
    this.name = name;
    this.datatype = datatype;
  }

  getDisplayForm(): String {
    var fieldDisplayForm = "";
    if (this.name == "id") {
      fieldDisplayForm += "\t@Id\n";
    }
    return fieldDisplayForm + "\tprivate " + this.firstCharToUpperCase(this.datatype) + " " + this.name + ";\n"
  }

  firstCharToUpperCase(name: String): String {
    let transformedFirstCharacter = name.charAt(0).toUpperCase();
    return transformedFirstCharacter + name.substr(1);
  }

  firstCharToLowerCase(name: String): String {
    let transformedFirstCharacter = name.charAt(0).toLowerCase();
    return transformedFirstCharacter + name.substr(1);
  }

  isEnum(): Boolean {
    return this.datatype.indexOf("Enum") != -1;
  }

  getDataType(): String {
    return this.datatype;
  }

  getName(): String {
    return this.name;
  }

  getGetterSetters(): String {
    var getterDisplay = "\n\n\tpublic " + this.firstCharToUpperCase(this.datatype) + " get" + this.firstCharToUpperCase(this.name) +
      "(){\n" +
      "\treturn this." + this.name + ";\n"
      + "\t}";
    var setterDisplay = "\n\n\tpublic void set" + this.firstCharToUpperCase(this.name) +
      "(" + this.firstCharToUpperCase(this.datatype) + " " + this.firstCharToLowerCase(this.name) + "){\n" +
      "\t\tthis." + this.name + " = " + this.name + ";\n"
      + "\t}";
    return getterDisplay + setterDisplay;
  }

}

@Injectable({
  providedIn: 'root'
})
export class PojoGeneratorService {

  nestedClasses = [];
  pojoClasses = [];
  zipFile: any;

  constructor() { }

  firstCharToUpperCase(name: String): String {
    let firstCharUpperCase = name.charAt(0).toUpperCase();
    return firstCharUpperCase + name.substr(1);
  }

  generate(jsonData: object, name: String, isNested: Boolean) {
    let pojoClass = new PojoClass(name, isNested);
    this.pojoClasses.push(pojoClass);
    for (let field in jsonData) {
      if (jsonData[field] instanceof Object) {
        if (Array.isArray(jsonData[field])) {
          this.generate(jsonData[field][0], field, true);
          pojoClass.addField(new PojoField(field, field));
        } else {
          this.generate(jsonData[field], field, true);
          pojoClass.addField(new PojoField(field, field));
        }
      } else {
        pojoClass.addField(new PojoField(field, jsonData[field]));
      }
    }
  }

  downloadAll() {
    this.zipFile = new JSZip();
    this.pojoClasses.forEach((pojoClassToDownload: PojoClass) => {
      this.addFile(pojoClassToDownload.getClassName().toString(), pojoClassToDownload.getDisplayForm().toString());
    });
    this.downloadZip();
  }

  addFile(filename: string, content: string) {
    this.zipFile.file(filename + ".java", content);
  }

  downloadZip() {
    this.zipFile.generateAsync({ type: "blob" })
      .then(function(content) {
        // see FileSaver.js
        saveAs(content, "MongoDBSchemaModel.zip");
      });
  }

  download(filename: string, content: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename + ".java");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

}
