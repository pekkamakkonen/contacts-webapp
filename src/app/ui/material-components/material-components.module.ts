import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDividerModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

const materialModules = [
  MatButtonModule,
  MatSidenavModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialComponentsModule { }
