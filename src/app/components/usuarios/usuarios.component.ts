import { Component, OnInit } from '@angular/core';
import { CrearUsuarioDialogoComponent } from '../../dialogos/crear-usuario-dialogo/crear-usuario-dialogo.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  loading: boolean;
  usuarios: Usuario[];
  roles: any[];

  constructor(
    private usuarioSrv: UsuarioService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  agregarUsuario(): void {
    //let usuario = new Usuario();

    let dialogRef = this.dialog.open(CrearUsuarioDialogoComponent, {
      data: {
        usuarios: this.usuarios,
        roles: this.roles
      },
      width: "500px"
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        if (result.error) {
          this.snackBar.open(result.error, "Cerrar", {
            duration: 2000
          });
        } else {
          this.snackBar.open("Usuario Creado", "Cerrar", {
            duration: 2000
          });
        }

      }


    });

  }

}
