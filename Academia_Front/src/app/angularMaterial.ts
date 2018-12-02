import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
],
})

export class MaterialModule { }