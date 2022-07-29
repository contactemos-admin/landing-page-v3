import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule
  ],
  template: `
  <nav>
        <img src="./../../../assets/img/logo.png" alt="Contactemos">
        <ul>
            <li>
                <a class="menu-item" [ngClass]="{'active': itemActive == 0}" href="#aboutUs">¿Quiénes somos?</a>
            </li>
            <li>
                <a class="menu-item" [ngClass]="{'active': itemActive == 1}" href="#solutions">Nuestras soluciones</a>
            </li>
            <li>
                <a class="menu-item" [ngClass]="{'active': itemActive == 2}" href="#blog">Noticias</a>
            </li>
            <li>
                <a class="menu-item" [ngClass]="{'active': itemActive == 3}" href="#contactUs">Contacto</a>
            </li>
        </ul>
        <!-- <ul>
            <li>
                <a class="menu-item">Trabaja con nosotros</a>
            </li>
            <li>
                <a class="menu-item">Regístrate</a>
            </li>
            <li>
                <a mat-raised-button color="accent" class="btn-account">
                    Mi Cuenta
                </a>
            </li>
        </ul> -->
    </nav>`,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    @Input() itemActive: number = -1;
      
    constructor() {}

}