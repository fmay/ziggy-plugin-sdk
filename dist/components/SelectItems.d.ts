import { FC } from 'react';
/**
 * Simplified SelectItems component for Ziggy plugins
 * This is a plugin-friendly version without Zustand store dependencies
 */
export interface SelectItem {
    id: string;
    label: string;
    extraData?: any;
}
export type SelectItemsSelection = SelectItem | SelectItem[] | null | undefined;
export interface SelectItemsProps {
    items: SelectItem[];
    selectedItem?: SelectItemsSelection;
    onSelect: (item: SelectItemsSelection) => void;
    placeholder?: string;
    clearable?: boolean;
    creatable?: boolean;
    multiSelect?: boolean;
    width?: number;
    isDisabled?: boolean;
    noOptionsMessage?: string;
    className?: string;
}
declare const SelectItems: FC<SelectItemsProps>;
export default SelectItems;
