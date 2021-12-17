import React from "react";

function Rejected() {
  let rejectGet: any = localStorage.getItem("Rejected");
  let parsedData = JSON.parse(rejectGet);

  return (
    <div>
      {parsedData.map((item: any) => {
        return <h3 key={item.id}>{item.name}</h3>;
      })}
    </div>
  );
}

export default Rejected;
