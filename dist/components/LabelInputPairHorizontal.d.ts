import { FC } from 'react';
/**
 * Simplified LabelInputPairHorizontal component for Ziggy plugins
 */
export interface LabelInputPairHorizontalProps {
    label: string;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    value: string;
    onChange: (value: string) => void;
    isNumber?: boolean;
    width?: number;
    placeholder?: string;
    type?: string;
    popupHelp?: string;
}
declare const LabelInputPairHorizontal: FC<LabelInputPairHorizontalProps>;
export default LabelInputPairHorizontal;
