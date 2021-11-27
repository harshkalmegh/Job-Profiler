import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const User = (props: any) => {
  const { user } = useLocation().state;
  return (
    <div className="user-main-container">
      <h1>{user.name}</h1>
      <img width="250px" height="250px" src={user.Image} alt="" />
      <h3>Id: {user.id}</h3>
      <div>
        <Link to="/" >
          <button>Homepage</button>
        </Link>
      </div>
    </div>
  );
};
