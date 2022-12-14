import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function FilterBar({ onCategoryChange, selectedCategory, onGenderChange, selectedGender, setSelectedCauses, causes}) {

    function handleCategoryChange(event) {
        onCategoryChange(event.target.value)
    }

    function handleGenderChange(event) {
        onGenderChange(event.target.value)
    }

    function onCauseToggle(cause) {
        setSelectedCauses(currentCauses => {
            if (currentCauses.includes(cause)) {
                return currentCauses.filter(c => c !== cause)
            } else {
            return [...currentCauses, cause]}
        })
    }

    return (
        <div style={{position:'fixed'}}>
            <h1 style={{color:'white'}}>Filter search</h1>
            {/* <FormControl>
                <FormLabel id="row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="men" control={<Radio checked={selectedGender === "Men"} onChange={handleGenderChange}/>} label="Men" />
                    <FormControlLabel value="women" control={<Radio checked={selectedGender === "Women"} onChange={handleGenderChange}/>} label="Women" />
                </RadioGroup>
            </FormControl> */}
            <form>
            <InputLabel id="select-label" style={{color:'white'}}>Gender</InputLabel>
                <div>
                    <input 
                    type="radio"
                    value="Men"
                    checked={selectedGender === 'Men'}
                    onChange={handleGenderChange}
                    /> <span style={{color:'white'}}>male</span>
                </div>
                <div>
                    <input
                    type="radio"
                    value="Women"
                    checked={selectedGender === 'Women'}
                    onChange={handleGenderChange}
                    /><span style={{color:'white'}}>female</span>
                </div>
                <div>
                    <input
                    type="radio"
                    value="All"
                    checked={selectedGender === 'All'}
                    onChange={handleGenderChange}
                    /> <span style={{color:'white'}}>All</span>
                </div>
            </form>
            <br></br>
            <br></br>
            <FormControl fullWidth>
                <InputLabel id="select-label" style={{color:'white'}}>Category</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        label="Age"
                        onChange={handleCategoryChange}
                        value={selectedCategory}
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Bags">Bags</MenuItem>
                        <MenuItem value="Shoes">Shoes</MenuItem>
                        <MenuItem value="Pants">Pants</MenuItem>
                        <MenuItem value="Tops">Tops</MenuItem>
                    </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormGroup>
                {/* <FormLabel id="checkbox-group-label">Causes</FormLabel>
                {causes.map((cause) => (
                    <FormControlLabel control={<Checkbox onChange={() => onCauseToggle(cause.name)}/>} label={cause.name} />
                ))} */}
            </FormGroup>
            {/* <ToggleButtonGroup id="causes" color="primary"  >
                {causes.map((cause) => (
                    <ToggleButton key={cause.id} onChange={() => onCauseToggle(cause.name)}>{cause.name}</ToggleButton>
                ))}
            </ToggleButtonGroup> */}
        </div>
    )
};

export default FilterBar;