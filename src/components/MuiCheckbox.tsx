
import { CheckBox } from '@mui/icons-material'
import {FormGroup, FormControlLabel, Checkbox , Box, Typography} from '@mui/material'


export const MuiCheckbox = () => {



    

    return (


        <>

            <Box sx={{width: 1/3}}>

            <Typography> </Typography>

            <FormGroup 
                row
            >

                <FormControlLabel control={<CheckBox />} label="dog" />
                <FormControlLabel control={<CheckBox />} label="cat" />
                <FormControlLabel control={<CheckBox />} label="bird" />


            </FormGroup>
      
            </Box>
    
        </>
    






    )











}