// Pasta Shared: Modulos leves e mais genericos, que podem ser reutilizados. Ex: Estrelas de avaliacao -> podem ser aplicadas a diversos produtos em um site (diversos contextos)

import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";

@NgModule({
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent
    ]
})
export class StarModule {

}