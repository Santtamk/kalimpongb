import React from "react";

const TextArea = ({ text }: { text: React.ReactNode }) => {
  return <div>{typeof text === "string" ? <em>{text}</em> : text}</div>;
};

export default TextArea;
