import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PopupHelp from './PopupHelp.js';
import { v4 } from 'uuid';
const LabelInputPairHorizontal = ({ label, className = '', inputClassName = '', labelClassName = '', value, onChange, placeholder = '', type = 'text', width, popupHelp, }) => {
    const handleChange = (e) => {
        onChange(e.currentTarget.value);
    };
    return (_jsxs("div", { className: `flex flex-row gap-2 place-items-center ${className}`, children: [_jsxs("div", { className: "ml-[3px] flex flex-row gap-1 place-items-center", children: [_jsx("div", { className: `${labelClassName}`, children: label }), popupHelp && _jsx(PopupHelp, { text: popupHelp })] }), _jsx("form", { autoComplete: "off", children: _jsx("input", { style: { width: width || '100%' }, id: v4(), name: v4(), className: `border-[1px] border-gray-300 rounded-md p-1 focus:ring-gray-400 ${inputClassName}`, placeholder: placeholder, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: false, onChange: handleChange, onDoubleClick: e => e.stopPropagation(), "aria-label": "input", value: value, type: type }) })] }));
};
export default LabelInputPairHorizontal;
//# sourceMappingURL=LabelInputPairHorizontal.js.map