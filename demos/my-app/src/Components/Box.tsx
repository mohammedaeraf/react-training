import type { ReactNode } from "react";

// Box.js
type BoxProps = {
  children: ReactNode;
};

function Box(props: BoxProps) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      {props.children}
    </div>
  );
}

export default Box;
