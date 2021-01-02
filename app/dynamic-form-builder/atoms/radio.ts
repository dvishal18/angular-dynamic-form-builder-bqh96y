import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DataService } from "../../../data.service";

@Component({
  selector: "radio",
  template: `
    <div [formGroup]="form">
      <div class="form-check" *ngFor="let opt of field.options">
        <input
          class="form-check-input"
          type="radio"
          [name]="opt.name"
          [value]="opt.key"
          (change)="onItemChange($event)"
        />
        <label class="form-check-label">
          {{ opt.label }}
        </label>
      </div>
    </div>
  `
})
export class RadioComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;

  constructor(private dataService: DataService) {}

  onItemChange(value) {
    console.log("ss", value.target.value);
    this.dataService.setNewRadioInfo({
      radioValue: value.target.value
    });
  }
}
