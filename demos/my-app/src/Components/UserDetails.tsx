import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams(); // Access the dynamic route param
  return (
    <div>
      <h2>User Details</h2>
      <p>You selected user with ID: <strong>{id}</strong></p>
    </div>
  );
}

export default UserDetails;
