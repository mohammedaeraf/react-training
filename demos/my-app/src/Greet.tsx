function Greet() {
  let name: string = "";
  // name is truthy (not empty)
  if (name) {
    return <h3>Hello {name}</h3>;
  } else {
    return <h3>Hello Buddy</h3>;
  }
}
export default Greet;
