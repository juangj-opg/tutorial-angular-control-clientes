import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ConfiguracionService } from "../servicios/configuracion service";

@Injectable()
export class ConfiguracionGuard implements CanActivate{
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private configuracionServicio: ConfiguracionService
    ){}

    canActivate(): Observable<any>{
        return this.configuracionServicio.getConfiguracion().pipe(
            map( configuracion => {
                if(configuracion.permitirRegistro){
                    return true
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        )
    }

}