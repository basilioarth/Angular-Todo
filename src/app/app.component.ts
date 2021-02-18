import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

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
  public todos: Todo[] = [];
  // todos é o nome da nossa variável.
  // public indica que essa variável pode ser acessada por todos, inclusive lá no front pelo html.
  // usamos o : para realizarmos a tipagem da nossa variável.
  // any[] significa que a variável será um array/lista de qualquer coisa.
  // = [] inicializa a nossa variável como um array vazio.
  public title: String = 'Minhas Trefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o cachorro', true));
    this.todos.push(new Todo(2, 'Cortar o cabelo', false));
    this.todos.push(new Todo(3, 'Ir ao mercado', false));
  }
  // Método que é chamado toda vez que o componente inicia.

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    // retorna o índice do elemento da lista 'todos' que seja igual ao 'todo' passado como parâmetro. Se não encontrar ninguém, retorna -1.
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }
}
