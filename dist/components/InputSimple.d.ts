import { FC } from 'react';
/**
 * Simplified InputSimple component for Ziggy plugins
 */
export interface InputSimpleProps {
    className?: string;
    value: string;
    onChange: (value: string) => void;
    width?: number;
    placeholder?: string;
    type?: string;
    readonly?: boolean;
}
declare const InputSimple: FC<InputSimpleProps>;
export default InputSimple;
