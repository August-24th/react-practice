import React from "react";

/**
 * To-do-List 간단 예제
 */

export default function Practice2() {
  const [todoList, setTodoList] = React.useState([
    { id: Date.now(), title: "영어 단어 10개 외우기" },
    { id: Date.now(), title: "React To-do List 만들기" },
  ]);

  const [todo, setTodo] = React.useState("");

  const handleTodoChanged = (e) => {
    setTodo(e.target.value);
  };

  // Todo 등록
  const handleTodoAddClicked = () => {
    setTodoList([...todoList, { id: Date.now(), title: todo }]);
  };

  // Todo 삭제
  const handleTodoDeleteClicked = (id) => {
    setTodoList([todoList.filter((todo) => todo.id !== id)]);
  };

  return (
    <div>
      <div>
        <input
          value={todo}
          onChange={handleTodoChanged}
          placeholder="할 일을 입력해주세요..."
        />
        <button onClick={handleTodoAddClicked}>등록</button>
      </div>
      <div>
        <ul>
          {todoList.map((todo) => (
            <li>
              <input type="checkbox"></input>
              {todo.title}
              <button onClick={() => handleTodoDeleteClicked(todo.id)}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
