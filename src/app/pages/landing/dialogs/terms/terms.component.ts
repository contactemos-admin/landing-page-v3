import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})

export class TermsConditionsComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TermsConditionsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { },
  ) {

  }

  ngOnInit() {
  }

}
