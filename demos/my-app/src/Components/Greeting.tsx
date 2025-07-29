// Step 1: Define the type
type GreetingProps = {
  name: string;
};

function Greeting(props: GreetingProps) {
  return <h2>Hello, {props.name}!</h2>;
}

export default Greeting;
