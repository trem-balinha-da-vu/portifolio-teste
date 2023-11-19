import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-barra-navegacao',
  standalone: true,
  imports: [
    CommonModule,
    TabMenuModule,
  ],
  templateUrl: './barra-navegacao.component.html',
  styleUrl: './barra-navegacao.component.css'
})
export class BarraNavegacaoComponent {
  items: MenuItem[] = [
    { label: 'Inicio', icon: 'pi pi-home' },
    { label: 'Sobre Mim', icon: 'pi pi-user' },
    { label: 'Contate-me', icon: 'pi pi-envelope' }
  ];

}
