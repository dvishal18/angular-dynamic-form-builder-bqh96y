import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

// dynamic form builder

import { DynamicFormBuilderModule } from "./dynamic-form-builder/dynamic-form-builder.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DataService } from "../data.service";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, DynamicFormBuilderModule],
  declarations: [AppComponent, HelloComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
