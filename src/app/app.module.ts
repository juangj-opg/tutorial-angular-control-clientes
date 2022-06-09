import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'flash-messages-angular';

import { FirestoreModule, FirestoreSettings } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ClienteServicio } from './servicios/cliente.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionService } from './servicios/configuracion service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NotFoundComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [ClienteServicio, LoginService, AuthGuard, ConfiguracionService, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
