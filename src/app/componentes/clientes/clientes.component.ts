import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'flash-messages-angular';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[]
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
    id: ''  
  };

  constructor(private clientesServicio: ClienteServicio, private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        console.log(clientes);
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach( cliente => {
        saldoTotal += cliente.saldo;
      })
    }
    return saldoTotal;
  }

  agregar({value, valid}: NgForm){
    if(!valid){
      this.flashMessages.show('Por favor rellena el formulario correctamente.', {
        cssClass: 'alert-danger',timeout: 4000
      });
    } else {
      // Agregar
    }
  }

}
