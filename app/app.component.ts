import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { DataService } from "../data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public form: FormGroup;
  unsubcribe: any;

  public fields: any[] = [];
  selectedRadio: any;
  len: number;

  constructor(private dataService: DataService) {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    });
    this.unsubcribe = this.form.valueChanges.subscribe(update => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }
  ngOnInit() {
    this.len = this.fields.length;

    this.createForm();
    //this.addData();
    this.dataService.getNewRadioInfo().subscribe(info => {
      if (info.radioValue) {
        this.selectedRadio = info.radioValue;
        this.getRadioFiled(info.radioValue);
      }
    });
  }

  addData() {
    this.fields.push({
      type: "radio",
      name: "radio",
      label: "radio",
      value: "m",
      required: true,
      visible: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    });
  }
  createForm() {
    this.fields.push({
      type: "radio",
      name: "radio",
      label: "radio",
      value: "m",
      required: true,
      visible: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    });
  }

  onUpload(e) {
    console.log(e);
  }

  getFields() {
    console.log("this.", this.fields);
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
  getRadioFiled(radioValue: any) {
    if (radioValue == "m") {
      if (this.len >= this.fields.length) {
      } else {
        this.fields.push({
          type: "text",
          name: "gggo",
          label: "ggggggggg",
          value: "",
          required: true,
          visible: true
        });
      }
    }
  }
}
