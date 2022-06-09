import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { map, Observable } from "rxjs";
import { Configuracion } from "../modelo/configuracion.model";

@Injectable()
export class ConfiguracionService {
    configuracionDoc: AngularFirestoreDocument<Configuracion>;
    configuracion: Observable<Configuracion>;

    // ID Único de la colección de la configuración
    id = '1';

    constructor( private db: AngularFirestore){}

    getConfiguracion(): Observable<Configuracion>{
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        //this.configuracion = this.configuracionDoc.valueChanges(); 
        this.configuracion = this.configuracionDoc.snapshotChanges().pipe(
            map((accion) => {
              const datos = accion.payload.data() as Configuracion;
              return datos;
            })
        );
        return this.configuracion;
    }

    modificarConfiguracion(configuracion: Configuracion){
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);
    }
}