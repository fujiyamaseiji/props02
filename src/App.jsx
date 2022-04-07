import React from "react";
import MessageColor from "./compornents/MessageColor";

const App = () => {
  const onClickButton = () => {
    alert("alart");
  };
  const hOneButton = {
    color: "blue",
    fontSize: "24px",
    borderRadius: "20px"
  };

  return (
    <>
      <button style={hOneButton} onClick={onClickButton}>
        ボタンですよ
      </button>

      <MessageColor color="pink">propsでメッセージピンク</MessageColor>
      <MessageColor color="blue">propsでメッセージ</MessageColor>
      <p style={{ color: "#999" }}>コメント</p>
    </>
  );
};

export default App;
// コンポーネント化しました
