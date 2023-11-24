import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';

export interface carousel {
  image: string;
  name: string;
}

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ImageModule
  ],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})


export class CarrosselComponent {
  products: carousel[] = [
    { image: 'tela1', name: 'tela 1' },
    { image: 'tela2', name: 'tela 2' },
    { image: 'tela3', name: 'tela 3' },
    { image: 'tela4', name: 'tela 4' },
    { image: 'tela5', name: 'tela 5' },
    { image: 'tela6', name: 'tela 6' }
  ];
  responsiveOptions: CarouselResponsiveOptions[]=[];
  numScroll: number = 2;
}
