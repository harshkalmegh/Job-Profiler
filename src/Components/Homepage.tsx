import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetRequest } from "../Utilities/Network";
import "./Homepage.css";

const Homepage = () => {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await GetRequest(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      );
      
      let userData = [...response];
      
      setUsers(userData);
      
    };

    fetchUsers();
  }, []);
  // console.log(users);
  const OnReset = () => {
    localStorage.clear()
  }
  return (
    <div style={{ maxWidth: "63%", margin: "0 auto", textAlign: "center" }}>

      <Link to="/shortlisted" state={{ name: "Shortlisted" }}>
        <button>Shortlisted</button>
      </Link>
      <Link to="/rejected" state={{ name: "Rejected" }}>
        <button>Rejected</button>
      </Link>
      <button onClick={OnReset}>Reset</button>
      <h3>Profiles</h3>
      <div className="container">
        {users.map((user: any) => {
          return (
            <Link key={user.id} to={`${user.id}`} state={{ user }}>
              <div key={user.id} className="card-container">
                <img width="150px" height="150px" src={user.Image} alt="" />
                <p>Id : {user.id}</p>
                <p>Name : {user.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
