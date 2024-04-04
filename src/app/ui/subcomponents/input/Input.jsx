export default function Input(props) {
  const {
    type,
    onChange
  } = props
  
  return (
    <div className="input">
      <input
        className="input__field"
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
      {
        type === 'password' 
        && <button>asd</button>
      }
    </div>
    
  )
}