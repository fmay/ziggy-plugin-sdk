import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PopupHelp from './PopupHelp.js';
const CheckboxWithLabel = ({ label, size = 25, className, checkboxClassName, checked, onChange, popupHelp, disabled = false, }) => (_jsxs("div", { className: `flex flex-row place-items-center gap-2 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${className || ''}`, onClick: disabled ? undefined : onChange, children: [_jsx("input", { "aria-label": label, type: "checkbox", autoComplete: "new-password", checked: checked, disabled: disabled, className: `ml-1 bg-hsMidGrayBg text-gray-700 p-0 ring-0 rounded-sm
        border-none outline-none ring-0 focus:ring-0 focus:outline-[0px] focus:border-transparent
        active:ring-0 active:outline-none active:border-transparent ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${checkboxClassName || ''}`, style: { width: `${size}px`, height: `${size}px` }, onChange: () => { } }), _jsxs("div", { className: "ml-[3px] flex flex-row gap-1", children: [_jsx("div", { className: "leading-[1.1]", children: label }), popupHelp && _jsx(PopupHelp, { text: popupHelp })] })] }));
export default CheckboxWithLabel;
//# sourceMappingURL=CheckboxWithLabel.js.map