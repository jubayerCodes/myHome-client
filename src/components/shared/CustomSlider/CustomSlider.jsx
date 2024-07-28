// src/CustomSlider.js

import { useState } from 'react';
import './CustomSlider.css'; // Make sure to create this CSS file

const CustomSlider = ({ min = 0, max = 100, step = 1, value: initialValue = 50, onChange }) => {
    const [value, setValue] = useState(initialValue);

    const handleMouseDown = (e) => {
        const slider = e.currentTarget;
        const rect = slider.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newValue = Math.round(((offsetX / slider.offsetWidth) * (max - min) + min) / step) * step;

        setValue(newValue);
        if (onChange) onChange(newValue);

        const handleMouseMove = (e) => {
            const offsetX = e.clientX - rect.left;
            const newValue = Math.round(((offsetX / slider.offsetWidth) * (max - min) + min) / step) * step;
            setValue(newValue);
            if (onChange) onChange(newValue);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="slider" onMouseDown={handleMouseDown}>
            <div className="slider-track">
                <div
                    className="slider-thumb"
                    style={{ left: `${((value - min) / (max - min)) * 100}%` }}
                />
            </div>
            <div className="slider-value">{value}</div>
        </div>
    );
};

export default CustomSlider;
