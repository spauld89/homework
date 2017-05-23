import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { SearchService } from './common/services/search/search.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: SearchService,
      useClass: SearchService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }