import { TestBed } from '@angular/core/testing';

import { PojoGeneratorService, PojoClass, PojoField } from './pojo-generator.service';

fdescribe('PojoGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PojoGeneratorService = TestBed.get(PojoGeneratorService);
    expect(service).toBeTruthy();
  });

  it('should generate a class', () => {
    var pojoClass = new PojoClass("customer", false);

    expect(pojoClass).toBeDefined();

  });

  it('should generate a field', () => {
    var pojoClass = new PojoField("id", "String");

    expect(pojoClass).toBeDefined();

  });

  it('should generate a complete pojo set', () => {
    const service: PojoGeneratorService = TestBed.get(PojoGeneratorService);
    const customers = {
      "id": "String",
      "name": "String",
      "addresses": [
        {
          "city": "String"
        }
      ],
      "paymentInfo": {
        "type": "Enum - Online, Card",
        "value": "Integer"
      }
    };

    var pojoClasses = service.generate(customers, "customers", false);

    // expect(pojoClasses).toBeDefined();
    expect(service.pojoClasses.length).toEqual(3);
    service.pojoClasses.forEach((pojoClass: PojoClass) => {
      console.log(pojoClass.getDisplayForm());
    });


  });

});
