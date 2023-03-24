import { CoreModule } from "./core/core.module";
import { LayoutModule } from "./core/layout/layout.module";
import { MatNativeDateModule } from "@angular/material/core";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./shared/modules/app-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { environment } from "src/environments/environment";

import { HotToastModule } from "@ngneat/hot-toast";
import { UploadComponent } from "./features/reports/ras-report/shared/upload/upload.component";

import { MatTableExporterModule } from "mat-table-exporter";

import { TabelaRegistroComponent } from "./shared/tabela-registro/tabela-registro.component";

import { HttpClientModule } from "@angular/common/http";
import { BottomSheetComponent } from "./shared/bottom-sheet/bottom-sheet.component";

//configuração do Firebase

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    UploadComponent,
    TabelaRegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule,
    HotToastModule.forRoot(),
    MatNativeDateModule,
    HttpClientModule,
    LayoutModule,
    CoreModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
