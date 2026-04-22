import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from "./../../core/main-header/main-header";
import { MainFooter } from "./../../core/main-footer/main-footer";

@Component({
  selector: 'app-home-page-context',
  imports: [RouterOutlet, MainHeader, MainFooter],
  templateUrl: './home-page-context.html',
  styleUrl: './home-page-context.scss',
})
export class HomePageContext { }
