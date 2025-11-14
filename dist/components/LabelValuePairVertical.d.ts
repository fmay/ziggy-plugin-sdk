import { FC, ReactNode } from 'react';
/**
 * Simplified LabelValuePairVertical component for Ziggy plugins
 */
export interface LabelValuePairVerticalProps {
    label: string;
    className?: string;
    children?: ReactNode | ReactNode[];
}
declare const LabelValuePairVertical: FC<LabelValuePairVerticalProps>;
export default LabelValuePairVertical;
