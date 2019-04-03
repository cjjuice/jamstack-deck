export default function Highlight(props) {
  return (
    <span style={{ padding: '20px', backgroundImage: 'linear-gradient(to bottom right, #f46b45, #F15F79)' }}>
      {props.text}
    </span>
  )
}
