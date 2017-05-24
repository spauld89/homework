import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { HttpService } from './common/services/http/http.service';
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
      provide: HttpService,
      useClass: HttpService
    },
    {
      provide: SearchService,
      useClass: SearchService
    },
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
