type BagProps = {
  type: string;
  children: any;
};
function Bag(props: BagProps) {
  return (
    <div className="border border-2 w-25 border-primary p-2 m-2">
      <h2 className="text-danger">Box Type - {props.type}</h2>
      {props.children}
    </div>
  );
}

export default Bag;
