
/**
 * 
 * @param {boolean} checked 
 * @param {string} label 
 * @param {label} id 
 * @param {(s:boolean)=>void} onChange 
 * @returns {JSX.Element}
 */
function Checkbox({checked, onChange, label, id}) {
  return (
    <div className="form-check">
        <input
        id={id}
        type="checkbox"
        className='form-check-input'
        checked={checked}
        onChange={(e)=>onChange(e.target.checked)}
        
        />
        <label htmlFor={id}
        className="form-checked-label">
            {label}
        </label>
    </div>
  )
}

export default Checkbox