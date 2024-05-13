import { ReactNode } from 'react';
import { TInputVariant } from './types';

export interface Example {
    example: string
}

export interface IToast {
    children: ReactNode
}

export interface IInputProps {
    name: string;
    label: string;
    variant: TInputVariant
    fullWidth?: boolean;
}

export interface ITextfieldPasswordProps extends IInputProps {

}