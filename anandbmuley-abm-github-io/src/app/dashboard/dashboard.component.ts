import { Component, OnInit } from '@angular/core';

export class Product {

  title: String
  subtitle: String
  thumbnail: String
  description: String
  location: String
  thumbnailCredit: String

}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[] = [
    {
      title: "MongoDB Schema Visualizer",
      subtitle: "Picture is worth a thousand words",
      description: "The product helps development teams to share visualized MongoDB schema in a meaningful format. This will make the understanding easy and clear communication of the intent.",
      thumbnail: "assets/visualizer.jpg",
      thumbnailCredit: "Data vector created by stories - www.freepik.com",
      location: "/mongodb-schema-visualizer"
    },
    {
      title: "JSON Path Extractor",
      subtitle: "Simple Automation for Time Reduction",
      description: "The product save your time to find the JSON path when you want to share some field mapping information with Development Team",
      thumbnail: "assets/jsonpath.jpg",
      thumbnailCredit: "Travel vector created by freepik - www.freepik.com",
      location: "/json-path-extractor"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
