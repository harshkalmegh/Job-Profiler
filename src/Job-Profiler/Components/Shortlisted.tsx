function Shortlisted() {
  let selectGet: any = localStorage.getItem("Shortlisted");
  let parsedData = JSON.parse(selectGet);

  return (
    <div>
      {parsedData.map((item: any) => {
        return <h3 key={item.id}>{item.name}</h3>;
      })}
    </div>
  );
}

export default Shortlisted;
