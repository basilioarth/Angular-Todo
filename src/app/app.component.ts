import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public form!: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])]
    });

    this.load()
  }
  // Método que é chamado toda vez que o componente inicia.

  add(){
    const title = this.form.controls['title'].value;
    // Opção alternativa this.form.value => { title: 'Título' }
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear(){
    this.form.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    // retorna o índice do elemento da lista 'todos' que seja igual ao 'todo' passado como parâmetro. Se não encontrar ninguém, retorna -1.
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  load() {
    const data = localStorage.getItem('todos');
    if(data){
      this.todos = JSON.parse(data!);
    } else {
      this.todos = [];
    }
  }
}
