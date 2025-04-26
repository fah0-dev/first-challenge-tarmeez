import "./com.css"

export default function Box() {
    const style = {
      color: "white",
      width: "40%",
      height: "15%",
      border: "1px solid white",
      display: "flex",
      flexDirection: "column-reverse", 
      justifyContent: "start",
      alignItems: "center",
      margin: "10px",
   

    }
  return (
    <div className="box" style={style}>
      <p>tihs is the post title</p>
      <div className="bar">
        <p></p>
      </div>
      <p>this is the post body</p>
    </div>
  )
}