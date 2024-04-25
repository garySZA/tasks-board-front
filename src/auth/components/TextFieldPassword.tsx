import React, { useState } from 'react';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller } from 'react-hook-form';

export const TextFieldPassword = () => {
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
            <Controller 
                name='password'
                render={({ field }) => (
                    <Input 
                        { ...field }
                        id='password'
                        type={ showPassword ? 'text' : 'password' }
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
                )}
            />
        </FormControl>
    )
}
