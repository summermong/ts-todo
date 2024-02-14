import React from 'react';
import Styles from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li className={Styles.item}>{props.text}</li>;
};

export default TodoItem;
