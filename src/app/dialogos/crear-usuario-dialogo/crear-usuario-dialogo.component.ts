import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { NgForm } from '@angular/forms';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-crear-usuario-dialogo',
  templateUrl: './crear-usuario-dialogo.component.html',
  styleUrls: ['./crear-usuario-dialogo.component.scss']
})
export class CrearUsuarioDialogoComponent implements OnInit {
  @ViewChild('formCreateUsuario') formCreateUsuario: NgForm;
  confirmacion: string;
  usuario: Usuario = new Usuario();


  constructor(
    private usuarioSrv: UsuarioService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CrearUsuarioDialogoComponent>
  ) { }

  ngOnInit() {
  }
/* 
  createUsuario() {
    this.usuarioSrv.createUsuario(this.usuario)
      .subscribe(
      usuario => {
        console.log("response", usuario);

        this.data.usuarios.push(usuario);
        this.formCreateUsuario.reset();

        //this.usuario= new Usuario();
        //podría devolver el usuario y que sea el componente padre
        // quien lo añada a la lista de usuario
        this.dialogRef.close(usuario);

      },
      (error: any) => {
        this.dialogRef.close({ error: "ERROR. Verifique sus datos o compruebe su conexión" });
      });
  }
 */
}
