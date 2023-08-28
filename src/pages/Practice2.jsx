import React from "react";

/**
 * To-do-List 간단 예제
 */

export default function Practice2() {
  const [todoList, setTodoList] = React.useState([
    { id: 1693219569022, title: "영어 단어 10개 외우기", done: false },
    { id: 1693219569023, title: "React To-do List 만들기", done: true },
  ]);

  const [text, setText] = React.useState("");

  // Text 상태 변경 이벤트 핸들러
  const handleTextChanged = (e) => {
    setText(e.target.value);
  };

  // Todo Done 상태 변경 이벤트 핸들러
  const handleDoneChanged = (todoId) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Todo 등록
  const handleTodoAddClicked = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: Date.now(), title: text, done: false },
    ]);
    setText("");
  };

  // Todo 삭제
  const handleTodoDeleteClicked = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <div>
        <input
          value={text}
          onChange={handleTextChanged}
          placeholder="할 일을 입력해주세요..."
        />
        <button onClick={handleTodoAddClicked}>등록</button>
      </div>
      <div>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleDoneChanged(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.done && "line-through",
                }}
              >
                {todo.title}
              </span>
              <button
                onClick={() => {
                  handleTodoDeleteClicked(todo.id);
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
