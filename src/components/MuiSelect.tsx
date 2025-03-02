import { Box, MenuItem, Typography } from '@mui/material';
import {useState} from 'react';
import Select, { SelectChangeEvent} from '@mui/material/Select'


export const MuiSelect = () => {

    const [country, setCountry] = useState<string>("");

    const handleChange = (event: SelectChangeEvent<string>) => {

        let newCountry = event.target.value

        setCountry( (prevCountry: string) => newCountry)
        
    }

    return (
        <>
        <Typography sx={{my: 3}}>Example of a select allowing only on select value
            <br/>
            Note that the InputBase control is inherited and contains many porperties and 'on' functions.
            <br/>
            Note the use of the renderValue property.
        </Typography>
        <Box sx={{width: 250}} >
            
            <Select

                displayEmpty
                labelId="textPlaceholder" //id of the select statement
                onChange={handleChange}
                value={country}
                fullWidth  //Expands the select statement to the size of the parent container
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        console.log(selected)
                        return <em>Placeholder</em>
                    }
                    console.log(selected)
                    return `You selected ${selected}`

                }}
           
            >
                <MenuItem value="United states">United States</MenuItem>
                <MenuItem value="Great Britain">Great Britain</MenuItem>
                <MenuItem value="Belgium">Belgium</MenuItem>
                <MenuItem value="Deutschland">Germany</MenuItem>

            </Select>



        </Box>
        </>


    )



}