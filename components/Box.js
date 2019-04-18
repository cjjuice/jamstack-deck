export default function Box(props) {
  const styleValues = {padding: "10px", margin: "0 10px", border: "5px solid #000"}

  return (
    <p style={styleValues}>{props.text}</p>
  )
}
