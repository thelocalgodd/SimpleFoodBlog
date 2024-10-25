import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      404. Not Found <br />
      <Link to="/home">Go Home</Link>
    </div>
  );
}

export default Error;
