import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

// import { KinveyModule } from 'kinvey-nativescript-sdk/angular';


import { RosterComponent } from "./roster/roster.component";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule
    // KinveyModule.init({
    //   appKey: 'kid_rkAS63nsS',
    //   appSecret: '33df2cb32c1b45fdbde41a69b5bd16e2'
    // })
  ],
  declarations: [
    AppComponent,
    RosterComponent
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
