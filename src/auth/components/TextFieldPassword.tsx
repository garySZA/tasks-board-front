import React, { useState } from 'react';
import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller, useFormState } from 'react-hook-form';
import { ITextfieldPasswordProps } from '../../types';

export const TextFieldPassword = ({ name, label, fullWidth=false, variant }: ITextfieldPasswordProps) => {
    const { errors } = useFormState();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(( show ) => !show );

    const handleMouseDownPassword = ( event: React.MouseEvent<HTMLButtonElement> ) => {
        event.preventDefault();
    };

    return (
        <FormControl
            variant={ variant }
            fullWidth={ fullWidth }
            error={ errors[name] ? true : false }
        >
            <InputLabel
                htmlFor={ name }
            >
                { label }
            </InputLabel>
            <Controller 
                name={ name }
                render={({ field }) => (
                    
                    <Input 
                        { ...field }
                        id={ name }
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
            { errors[name] && <FormHelperText>{ String( errors[name] ? errors[name]?.message : '' ) }</FormHelperText> }
        </FormControl>
    )
}
