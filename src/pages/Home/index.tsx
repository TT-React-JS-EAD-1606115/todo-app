import { ChangeEvent, useEffect, useState } from "react";
import { createTodo, getTodoList, updateTodoStatus } from "../../api/todo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AddContainer, Container, TodosContainer } from "./styles";
import { ITodo } from "../../types/todo";
import { Todo } from "../../components/Todo";

export const Home = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [addValue, setAddValue] = useState<string>("");

  const handleChangeAddValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setAddValue(value);
  };

  const handleAddTodo = async () => {
    await createTodo(addValue);

    handleGetTodoList();
  };

  const handleGetTodoList = async () => {
    const response = await getTodoList();

    setTodoList(response.data);
  };

  const handleChangeStatus = async (todo: ITodo) => {
    await updateTodoStatus(!todo.status, todo.id);
    handleGetTodoList();
  };

  useEffect(() => {
    handleGetTodoList();
  }, []);

  return (
    <Container>
      <AddContainer>
        <Input
          placeholder="Insira sua próxima tarefa"
          value={addValue}
          onChange={handleChangeAddValue}
        />

        <Button onClick={handleAddTodo}>Adicionar</Button>
      </AddContainer>

      <TodosContainer>
        {todoList.map((todo) => (
          <Todo todo={todo} onStatusChange={handleChangeStatus} />
        ))}
      </TodosContainer>
    </Container>
  );
};
