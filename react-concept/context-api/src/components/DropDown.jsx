import { useState } from "react";

const DropDown = () => {
    const [language, setLanguage] = useState("english");
    const handleChange = (e) => {
        setLanguage(e.target.value)
    }
    return (
        <select value={language} onChange={handleChange}>
            <option value="english">English</option>
            <option value="germany">Germany</option>
        </select>
    )
}

export default DropDown;