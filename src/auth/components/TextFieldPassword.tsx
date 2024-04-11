import React, { useState } from 'react';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const TextFieldPassword = ({ id, name,}: { id: string, name: string }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(( show ) => !show );

    const handleMouseDownPassword = ( event: React.MouseEvent<HTMLButtonElement> ) => {
        event.preventDefault();
    };

    return (
        <FormControl
            variant='standard'
            fullWidth
        >
            <InputLabel
                htmlFor='password'
            >
                Password
            </InputLabel>
            <Input 
                id={ id }
                type={ showPassword ? 'text' : 'password' }
                name={ name }
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                            aria-label='toggle password visibility'
                            onClick={ handleClickShowPassword }
                            onMouseDown={ handleMouseDownPassword }
                        >
                            { showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}
