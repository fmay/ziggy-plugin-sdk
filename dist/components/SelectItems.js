import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
const defaultStyles = {
    control: (base) => ({
        ...base,
        minHeight: '32px',
        borderColor: '#d1d5db',
        '&:hover': {
            borderColor: '#9ca3af',
        },
    }),
    valueContainer: (base) => ({
        ...base,
        padding: '2px 8px',
    }),
    input: (base) => ({
        ...base,
        margin: 0,
        padding: 0,
    }),
    indicatorsContainer: (base) => ({
        ...base,
        height: '32px',
    }),
    menu: (base) => ({
        ...base,
        zIndex: 9999,
    }),
    menuPortal: (base) => ({
        ...base,
        zIndex: 9999,
    }),
};
const SelectItems = ({ items, selectedItem, onSelect, placeholder = 'Select...', clearable = true, creatable = false, multiSelect = false, width, isDisabled = false, noOptionsMessage = 'No options', className = '', }) => {
    const [inputValue, setInputValue] = useState(Array.isArray(selectedItem) ? '' : selectedItem?.id || '');
    // Convert items to react-select format
    const options = items.map(item => ({
        label: item.label,
        value: item.id,
        extraData: item.extraData ?? null,
    }));
    // Convert selected item to react-select format
    const selectedValue = Array.isArray(selectedItem)
        ? selectedItem.map(item => ({
            label: item.label,
            value: item.id,
            extraData: item.extraData ?? null,
        }))
        : selectedItem
            ? {
                label: selectedItem.label,
                value: selectedItem.id,
                extraData: selectedItem.extraData ?? null,
            }
            : null;
    const handleChange = (selected) => {
        if (!selected) {
            onSelect(null);
            return;
        }
        if (Array.isArray(selected)) {
            // Multi-select
            const items = selected.map(opt => ({
                id: opt.value,
                label: opt.label,
                extraData: opt.extraData,
            }));
            onSelect(items);
        }
        else {
            // Single select
            const item = {
                id: selected.value,
                label: selected.label,
                extraData: selected.extraData,
            };
            onSelect(item);
        }
    };
    const handleInputChange = (value) => {
        setInputValue(value);
    };
    const commonProps = {
        styles: defaultStyles,
        options,
        onChange: handleChange,
        placeholder,
        value: selectedValue,
        noOptionsMessage: () => noOptionsMessage,
        isClearable: clearable,
        menuPortalTarget: typeof document !== 'undefined' ? document.body : null,
        isDisabled,
        isMulti: multiSelect,
    };
    const containerStyle = width ? { width: `${width}px` } : {};
    return (_jsx("div", { className: `w-full ${className}`, style: containerStyle, children: creatable ? (_jsx(CreatableSelect, { ...commonProps, inputValue: inputValue, onInputChange: handleInputChange })) : (_jsx(Select, { ...commonProps })) }));
};
export default SelectItems;
//# sourceMappingURL=SelectItems.js.map