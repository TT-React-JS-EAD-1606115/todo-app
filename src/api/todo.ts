import { AxiosResponse } from "axios";
import { ITodo } from "../types/todo";
import { api } from "./index";

export async function getTodoList(): Promise<AxiosResponse<ITodo[]>> {
  const response = await api.get<ITodo[]>("/todo");

  return response;
}

export async function createTodo(title: string) {
  const newTodo = {
    title: title,
    status: false,
  };

  const response = await api.post("/todo", newTodo);

  return response;
}

export async function updateTodoStatus(newStatus: boolean, id: string) {
  const response = await api.put(`/todo/${id}`, { status: newStatus });

  return response;
}

export async function deleteTodo(id: string) {
  const response = await api.delete(`/todo/${id}`);

  return response;
}
