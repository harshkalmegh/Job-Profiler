import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const User = (props: any) => {
  const { user } = useLocation().state;
  
  const selectlist: any = []
  const rejectList: any = []

  const OnSelecting = () => {
    let getShortListed: any = localStorage.getItem("Shortlisted")
    if (getShortListed) {
      selectlist.push(...JSON.parse(getShortListed))
    }
    selectlist.push(user)
    JSON.stringify(selectlist)
    localStorage.setItem("Shortlisted", JSON.stringify(selectlist))
  };

  
// STEP 1: Create new Empty array.
// STEP 2: Get shortlisted/rejected list if available else skip this.
// STEP 3: Parse shortlisted/rejected list.
// STEP 4: Push shortlisted/rejected list into empty array.
// STEP 5: Push new item into array.
// STEP 6: Stringify current array.
// STEP 7: set current array to shortlisted/rejected key in local/session storage
  

  const OnRejecting = () => {
    let getRejected: any = localStorage.getItem("Rejected")
    if (getRejected) {
      rejectList.push(...JSON.parse(getRejected))
    }
    rejectList.push(user)
    JSON.stringify(rejectList)
    localStorage.setItem("Rejected", JSON.stringify(rejectList))
  };

  return (
    <div className="user-main-container">
      <img width="150px" height="150px" src={user.Image} alt="" />
      <p>Id : {user.id}</p>
      <p>Name : {user.name}</p>
      <div>
        <Link to="/">
          <button>Homepage</button>
        </Link>
        <Link to="/" state={{ select: true, id: user.id }}>
          <button onClick={OnSelecting}>Select</button>
        </Link>
        <Link to="/" state={{ select: false, id: user.id }}>
          <button onClick={OnRejecting}>Reject</button>
        </Link>
        
      </div>
    </div>
  );
};
