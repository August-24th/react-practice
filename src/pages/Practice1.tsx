import React from "react";

/**
 * useState() 사용 연습 예제
 * 이벤트 리스너 등록 연습 예제
 */

export default function Practice1() {
  const [message, setMessage] = React.useState("Hello World!");

  // 1. 함수 정의
  const handleToUpperCaseClicked = () => {
    setMessage(message.toUpperCase());
  };

  const handleToLowerCaseClicked = () => {
    setMessage(message.toLowerCase());
  };

  return (
    <>
      <p>
        <span>{message}</span>
      </p>
      <div>
        {/* 2. onClick={함수명} */}
        <button onClick={handleToUpperCaseClicked}>대문자로 변경</button>
        <button onClick={handleToLowerCaseClicked}>소문자로 변경</button>
        <button onClick={() => setMessage(message.toLowerCase())}>
          소문자로 변경
        </button>
      </div>
    </>
  );
}
