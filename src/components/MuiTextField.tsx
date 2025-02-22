import { Stack, TextField, Typography, InputAdornment } from '@mui/material';
import PasswordIcon from '@mui/icons-material/Password';

import React, { useState } from 'react';

export const MuiTextField = () => {

    const [value, setValue] = useState<string>("")

    //Note that from the definition of onBlur, was able to grab HTMLInputElement
    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {

        setValue((prevInputError: string) => {

            console.log("handleOnBlur element is",event);
            return event.target.value;

        })

    }

    return (

        <>

        <Stack spacing={4}>

            <Typography sx={{mb:3, mt:3}}>Variants of TextField</Typography>
            <Stack direction="row" spacing={2}>

                <TextField label="Filled" variant="filled"></TextField>
                <TextField label="Outlined" variant="outlined"></TextField>
                <TextField label="Standard" variant="standard"></TextField>

            </Stack>

            <Typography sx={{mb:3, mt:3}}>
                TextField sizes - small and medium
                <br/>
                Note the color change when a color has been assigned to a TextField
                <br/> Asterisk denotes a required field
            </Typography>
            <Stack direction="row" spacing={2}>
                
                <TextField label="Small" variant="outlined" size="small" color="secondary"></TextField>
                <TextField label="Medium" variant="outlined" size="medium" helperText="Input helper text goes here"></TextField>
                <TextField label="Medium" variant="outlined" size="medium" required placeholder='Required input'></TextField>

            </Stack>
            <Typography sx={{mb:3, mt:3}}>
                The TextField can take as 'type' property any HTML5 input type.
                <br/>
                Readonly using slotProps
               
            </Typography>
            <Stack direction="row" spacing={3}>
                
                <TextField label="Small" variant="standard"  size="small" color="secondary" type="checkbox" helperText="This is a button"></TextField>
                <TextField label="Medium" variant="outlined" size="medium" helperText="This is a date-time local" type="datetime-local"></TextField>
                <TextField label="Medium" variant="outlined" size="medium" required helperText="This is a password" type="password"></TextField>
                <TextField label="Medium" variant="outlined" size="medium" required helperText="This is a readonly" slotProps={{input: { readOnly: true}}} value="Money"></TextField>

            </Stack>
            <Typography sx={{mb:3, mt:3}}>
                Use InputAdornment tag to add characters before and after the input value.<br/>
                MUI Icons be used as well.
              
            </Typography>
            <Stack direction="row" spacing={3}>
                
                <TextField  variant="standard"  size="small" 
                    color="secondary" 
                    label="Amount"
                    slotProps={{
                        input: {startAdornment: <InputAdornment position="start">$</InputAdornment>}
                    }}>
                  </TextField>  
                  <TextField  variant="standard"  size="small" 
                    color="primary" 
                    label="Weight"
                    slotProps={{
                        input: {endAdornment: <InputAdornment position="end">kg</InputAdornment>}
                    }}>
                  </TextField>  
                  <TextField  variant="standard"  size="small" type="password"
                    color="primary" 
                    label="Password"
                    slotProps={{
                        input: {endAdornment: <InputAdornment position="end"><PasswordIcon/></InputAdornment>}
                    }}>
                  </TextField>  
                 </Stack>
                 <Typography sx={{mb:3, mt:3}}>
                The TextField can take as 'type' property any HTML5 input type.
                <br/>
                Readonly using slotProps
               
            </Typography>
            <Stack direction="row" spacing={3}>
                
                <TextField label="medium" variant="standard"  size="medium"  value={value}
                color="secondary"  onChange={handleOnBlur} error={value !== "money"} 
                helperText={value !== "money" ? "Input a valid string" :""}>

                </TextField>
                

            </Stack>


        </Stack>

        
        
        
        
        
        </>


    )


}