import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-adicionar',
  templateUrl: './botao-adicionar.component.html',
  styleUrls: ['./botao-adicionar.component.scss']
})
export class BotaoAdicionarComponent implements OnInit {
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
