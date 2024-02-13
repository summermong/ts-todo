class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}

export default Todo;

// 미리 프로퍼티를 정의하고 해당 프로퍼티에 어떤 타입을 가진 값이 저장되는지 밝혀줘야 함
