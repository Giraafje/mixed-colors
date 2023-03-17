import React, {useState} from 'react';
import './colorSlider.css'

const ColorSlider = ({ baseColor, colorName, onValueChange }) => {
    const [value, setValue] = useState(0)
    
    const handleValueChange = (e) => {
        setValue(e.target.value)
        onValueChange(value)         
    }

    return (
        <>
            <label for={baseColor}>{colorName}</label>
            <input
            type="range"
            class={`slider slider--${baseColor}`}
            id={`${baseColor}Slider`}
            min="0"
            max="255"
            defaultValue="0"
            value={value}
            onChange={handleValueChange}
            />
      </>
    )
};

export default ColorSlider;