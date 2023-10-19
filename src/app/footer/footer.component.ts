import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatDividerModule],
})
export class FooterComponent {
  project={
    currentVersion:`Version 5.2.5`,
    footerTradeMark:`© 2023 Sundrop Attorneys LLP`
  }
}
