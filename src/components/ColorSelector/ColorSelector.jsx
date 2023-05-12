export const ColorSelector = ({ optionSelected, selection, product}) => {
    
    return (
    <>
        <select 
        value={selection.color}
        onChange={optionSelected}
        className="form-select" aria-label=".form-select-sm example"
        >
            { product.color.map((color, i) => 
            <option 
            key={i} 
            value={color}>
            {color.toUpperCase()}
            </option>
            )}
        </select>
    </>
  )
};


