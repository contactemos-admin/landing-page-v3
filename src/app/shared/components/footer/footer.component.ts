import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
  <footer>
        <div class="copyright">
            © Contactemos.co SAS - {{today | date:'yyyy'}}. Todos los derechos reservados.
        </div>
    </footer>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  today = new Date();

  constructor() {}

}