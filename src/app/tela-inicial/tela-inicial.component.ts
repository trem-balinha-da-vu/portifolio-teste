import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacaoComponent } from '../barra-navegacao/barra-navegacao.component';
import { CarrosselComponent } from '../carrossel/carrossel.component';


@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [
    CommonModule,
    BarraNavegacaoComponent,
    CarrosselComponent
  ],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {

}
