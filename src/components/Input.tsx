import { Controller, useFormState } from 'react-hook-form';
import { TTextfieldProps } from '../types';
import { TextField } from '@mui/material';

export const Input = ({ name, label, placeholder, variant, fullWidth=false, type, multiline = false }: TTextfieldProps) => {
    const { errors } = useFormState();

    return (
        <Controller
            name={ name }
            render={({ field }) => (
                <TextField 
                    type={ type }
                    label={ label }
                    variant={ variant }
                    placeholder={ placeholder }
                    fullWidth={ fullWidth }
                    multiline={ multiline }
                    minRows={ 1 }
                    maxRows={ 10 }
                    color='secondary'
                    error={ errors[name] ? true: false }
                    helperText={ String( errors[name] ? errors[name]?.message : '' ) }
                    { ...field }
                />
            )}
        >
        </Controller>
    )
}
