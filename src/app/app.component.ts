import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  // Toda vez que definimos um seletor para o componente, esse seletor vira uma tag html.
  // Nesse caso, a tag html para esse seletor vai ficar da seguinte forma: <app-root>.
  // Podemos vizualizar essa tag lá no arquivos index.html; É lá que ela é chamada.
  templateUrl: './app.component.html',
  // O template pode ser tanto um template html como segue: template: '<p>meu template</p>'
  // onde você 'inputa' o seu html, quanto um templateUrl onde você informa a url da onde
  // está o seu arquivo html.
  styleUrls: ['./app.component.css']
  // É um array onde definimos todos os css que esse componente tem
})
export class AppComponent {
  title = 'todo';
}
