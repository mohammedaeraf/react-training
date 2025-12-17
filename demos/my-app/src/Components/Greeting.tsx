type Props = {
  name: string;
};
let Greeting = (props: Props) => {
  return (
    <div>
      <h2 className="text-secondary py-5">Hello, {props.name}</h2>
    </div>
  );
};
export default Greeting;
