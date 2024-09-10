import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css',
})
export class Componente01Component {
  listNames: string[] = ['Alan', 'Barroncas']; // Lista de nomes
  name: string = this.listNames[0]; // Nome inicial

  images: string[] = [
    '../../../public/assets/vasco.png',
    '../../../public/assets/vasco2.jpeg',
  ]; // Lista de imagens
  image: string = this.images[0]; // Imagem inicial

  currentIndex: number = 0; // Índice para controlar o nome e a imagem atuais

  // Método chamado ao clicar no botão
  onClickBtn() {
    // Alterna o índice entre 0 e 1
    this.currentIndex = (this.currentIndex + 1) % this.listNames.length;

    // Atualiza o nome e a imagem de acordo com o índice atual
    this.name = this.listNames[this.currentIndex];
    this.image = this.images[this.currentIndex];
  }
}
