import { Component, Input } from "@angular/core"
import {  Router } from '@angular/router';

@Component ({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  constructor() { }
  @Input() button: string
}