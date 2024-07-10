import { ITodo } from "../../types/todo";
import { CheckIcon, Container, TrashIcon, UnCheckIcon } from "./styles";

interface TodoProps {
  todo: ITodo;
  onStatusChange: (todo: ITodo) => void;
}

export const Todo = ({ todo, onStatusChange }: TodoProps) => {
  return (
    <Container>
      {todo.status ? (
        <CheckIcon onClick={() => onStatusChange(todo)} />
      ) : (
        <UnCheckIcon onClick={() => onStatusChange(todo)} />
      )}

      <span>{todo.title}</span>

      <TrashIcon />
    </Container>
  );
};
