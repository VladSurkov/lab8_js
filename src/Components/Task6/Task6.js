import React, {useState} from 'react';

const Task6 = () => {
    const colors = ['red', 'green', 'blue'];
    const [color, setColor] = useState(colors[0]);

    const colorChangeHandler = (event) => {
        const selectedColor = event.target.value;
        setColor(selectedColor);
    };

    return (
        <div>
            <h3>Task 6</h3>
            <p>
                It's <span style={{color}}>{color}</span> color
            </p>
            <select
                value={color}
                onChange={colorChangeHandler}
            >
                {colors.map((buttonColor) => (
                    <option
                        key={buttonColor}
                        value={buttonColor}
                    >
                        {buttonColor}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Task6;
