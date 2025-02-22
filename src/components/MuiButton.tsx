import { Button, IconButton, Stack, Typography, ButtonGroup} from '@mui/material'
import {ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import  AirplanemodeActiveIcon  from '@mui/icons-material/AirplanemodeActive';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';



export const MuiButton = () => {

   // 
   const [toggleFormats, setFormats] = useState<(null | string[])>();

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    

       console.log("handleFormatChage: updatedFormats is", updatedFormats);

      // setFormats( (prevToggleformats) =>  updatedFormats ); 
      
      setFormats( (prevToggleformats: (null |string[] | undefined)) =>  updatedFormats );
  
    }

    return (

        <>

        <Typography variant='h6'>Default Stack uses flex layout</Typography>
        <Stack spacing={2} direction="row" sx={{mb: 3, mt: 3}}>
            <Button variant="contained">Contained</Button>
            <Button variant="text">Text</Button>
            <Button variant="outlined" color="secondary">Outlined</Button>
            <Button variant="outlined" href="https://google.com">Outlined with href</Button>

        </Stack>
        <Typography variant='h6'>Buttons with various size properties</Typography>
        <Stack spacing={2} direction="row" display="block">
            <Button variant="contained" size="small">Small</Button>
            <Button variant="text" size="medium">Text</Button>
            <Button variant="outlined" size="large">Large</Button>
            
        </Stack>
        <Typography variant='h6'>startIcon and endIcon properties</Typography>
        <Stack spacing={2} direction="row" sx={{mb: 3, mt: 3}}>
            <Button variant="contained" startIcon={<AddShoppingCartIcon />} endIcon={ <AirplanemodeActiveIcon />}>Icons</Button>
         </Stack>
         <Typography variant='h6'>IconButton  - note the icon only </Typography>

         <IconButton size="large" onClick={() => alert("yes - money")}>
            <AirplanemodeActiveIcon />
        </IconButton>

        <Typography variant='h6'>
            ButtonGroup adds a smoother GUI for buttons< br/>
            Action handlers are added to each button
            </Typography>
        <ButtonGroup variant="contained">

            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>

        </ButtonGroup>
        
        <Typography variant='h6' sx={{mb:3, mt: 3}}>ButtonGroup with vertical orientation</Typography>
        <ButtonGroup variant="text" orientation='vertical'>

            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>

        </ButtonGroup>

        <br />
        <Typography variant='h6' sx={{mb:3, mt: 3}}>ToggleButton examples - function like toggle buttons used in Word.
            <br />
            Note how the onChange handler is on the ToggleButtonGroup.
            <br />
            There is an 'exclusive' property that allows only one toggle button to be active.
        </Typography>

        <ToggleButtonGroup value={toggleFormats} onChange={handleFormatChange} exclusive>
            <ToggleButton value="bold">
                <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="underlined">
                <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value="center">
                <FormatAlignCenterIcon />
            </ToggleButton>
        
        </ToggleButtonGroup>
          
        </>

    )




}