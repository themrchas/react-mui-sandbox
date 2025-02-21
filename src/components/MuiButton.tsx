import { Button, Stack, Typography} from '@mui/material'


export const MuiButton = () => {

    return (

        <>

        <Typography variant='h6'>Default Stack uses flex layout</Typography>
        <Stack spacing={2} direction="row">
            <Button variant="contained">Contained</Button>
            <Button variant="text">Text</Button>
            <Button variant="outlined" color="secondary">Outlined</Button>
            <Button variant="outlined" href="https://google.com">Outlined with href</Button>

        </Stack>
        <Stack spacing={2} direction="row" display="block">
            <Button variant="contained" size="small">Small</Button>
            <Button variant="text" size="medium">Text</Button>
            <Button variant="outlined" size="large">Large</Button>
            
        </Stack>
        
        
        
        </>


    )




}