import { useRef } from 'react';
import Styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; //!. (null이 아님을 확신할 때)

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };
  return (
    <form className={Styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
