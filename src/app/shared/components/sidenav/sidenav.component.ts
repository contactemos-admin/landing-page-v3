import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
    CommonModule
  ],
  template: `
    <mat-drawer-container  [hasBackdrop]="true">
    <mat-drawer #drawer mode="over">
    <mat-list role="list">
      <mat-list-item role="listitem">
      <mat-icon mat-list-icon>groups</mat-icon>
        <a class="menu-item" [ngClass]="{'active': itemActive == 0}" href="#aboutUs" (click)="drawer.toggle()">¿Quiénes somos?</a>
      </mat-list-item>
      <mat-list-item role="listitem">
      <mat-icon mat-list-icon>engineering</mat-icon>
      <a class="menu-item" [ngClass]="{'active': itemActive == 1}" href="#solutions" (click)="drawer.toggle()">Nuestras soluciones</a>
      </mat-list-item>
      <mat-list-item role="listitem">
      <mat-icon mat-list-icon>contact_page</mat-icon>
      <a class="menu-item" [ngClass]="{'active': itemActive == 2}" href="#contactUs" (click)="drawer.toggle()">Contacto</a>
      </mat-list-item>
      <mat-list-item role="listitem">
        <mat-icon mat-list-icon>feed</mat-icon>
        <a class="menu-item" [ngClass]="{'active': itemActive == 3}" href="#blog" (click)="drawer.toggle()">Noticias</a>
      </mat-list-item>
      <!-- <mat-divider></mat-divider>
      <mat-list-item role="listitem">
      <mat-icon mat-list-icon>diversity_3</mat-icon>
      <a class="menu-item" (click)="drawer.toggle()">Trabaja con nosotros</a>
      </mat-list-item>
      <mat-list-item role="listitem">
      <mat-icon mat-list-icon>how_to_reg</mat-icon>
      <a class="menu-item" (click)="drawer.toggle()">Regístrate</a>
      </mat-list-item>
      <mat-list-item role="listitem">
        <button mat-raised-button color="accent">Mi cuenta</button>
      </mat-list-item> -->
    </mat-list>
    </mat-drawer>

    <div class="header-mobile">
        <img [routerLink]="['/']" src="./../../../assets/img/logo.png" alt="Colonia Company">
        <button type="button" mat-button (click)="drawer.toggle()">
            <mat-icon>menu</mat-icon>
        </button>

    </div>

    <ng-content></ng-content>

  </mat-drawer-container>
  `,
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent {

  @Input() itemActive: number = -1;
  constructor() {}

}
