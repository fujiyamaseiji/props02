import React from "react";

const MessageColor = (props) => {
  const { color, children } = props;
  const compornentColor = {
    color,
    fontSize: "24px"
  };

  return (
    <>
      <p style={compornentColor}>{children}</p>
    </>
  );
};

export default MessageColor;
// コンポーネント化しました
