import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TermsConditionsComponent } from './dialogs/terms/terms.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDialogModule,
    FontAwesomeModule,
    TermsConditionsComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  contactForm: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      message: [null, Validators.required],
      terms: [false]
    })
  }

  showTerms() {
    this.dialog.open(TermsConditionsComponent, {
      data: {  }
    });
  }

  submit() {
    this.contactForm.markAllAsTouched();
  }

}