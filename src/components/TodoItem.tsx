import React from 'react';
import Styles from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li className={Styles.item}>
      <div>{props.text}</div>
      <button onClick={props.onRemoveTodo}>❌</button>
    </li>
  );
};

export default TodoItem;
