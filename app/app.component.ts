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
    this.dataService.getNewRadioInfo().subscribe(info => {
      if (info.radioValue) {
        this.selectedRadio = info.radioValue;
        this.getRadioFiled(info.radioValue);
      }
    });
  }
createForm() {
  this.fields.push(
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "email",
      label: "Email",
      value: "",
      required: true
    },

    {
      type: "file",
      name: "picture",
      label: "Picture",
      required: true,
      onUpload: this.onUpload.bind(this)
    },
    {
      type: "dropdown",
      name: "country",
      label: "Country",
      value: "in",
      required: true,
      options: [{ key: "in", label: "India" }, { key: "us", label: "USA" }]
    },
    {
      type: "radio",
      name: "radio",
      label: "radio",
      value: "m",
      required: true,
      options: [{ key: "m", label: "Male" }, { key: "f", label: "Female" }]
    },
    {
      type: "checkbox",
      name: "hobby",
      label: "Hobby",
      required: true,
      options: [{ key: "f", label: "Fishing" }, { key: "c", label: "Cooking" }]
    })
}

  onUpload(e) {
    console.log(e);
  }

  getFields() {
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
          name: "firstName",
          label: "First Name",
          value: "",
          required: true
        });
      }
    }
  }
}
