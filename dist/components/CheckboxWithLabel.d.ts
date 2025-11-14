import { FC } from 'react';
/**
 * Simplified CheckboxWithLabel component for Ziggy plugins
 */
export interface CheckboxWithLabelProps {
    label: string;
    size?: number;
    className?: string;
    checkboxClassName?: string;
    checked: boolean;
    onChange: () => void;
    popupHelp?: string;
    disabled?: boolean;
}
declare const CheckboxWithLabel: FC<CheckboxWithLabelProps>;
export default CheckboxWithLabel;
