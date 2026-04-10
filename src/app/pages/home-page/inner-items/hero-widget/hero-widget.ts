import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-widget',
  imports: [RouterLink],
  templateUrl: './hero-widget.html',
  styleUrl: './hero-widget.scss',
})
export class HeroWidget {}
