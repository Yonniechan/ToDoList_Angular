import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todolist.component';
import { TodoListService } from './todolist.service';


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [TodoListService],
  exports: [TodoListComponent]
})
export class TodolistModule { }
