import type { ReactNode } from "react";

// Box.js
type BoxProps = {
  type: string;
  children: ReactNode;
};

function Box(props: BoxProps) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h2 className="text-danger">
        Box Type - <b>{props.type}</b>
      </h2>
      {props.children}
    </div>
  );
}

export default Box;
