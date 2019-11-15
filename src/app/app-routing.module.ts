import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RosterComponent } from "./roster/roster.component";

const routes: Routes = [
    { path: "", redirectTo: "/roster", pathMatch: "full" },
    { path: "roster", component: RosterComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
