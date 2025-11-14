import { FC } from 'react';
/**
 * Simplified PopupHelp component for Ziggy plugins
 * Shows help text in a simple tooltip/popup without markdown rendering
 */
interface PopupHelpProps {
    text: string;
}
declare const PopupHelp: FC<PopupHelpProps>;
export default PopupHelp;
