import { jsx as _jsx } from "react/jsx-runtime";
import { v4 } from 'uuid';
const InputSimple = ({ className = '', value, width, onChange, placeholder = '', type = 'text', readonly = false, }) => {
    const handleChange = (e) => {
        onChange(e.currentTarget.value);
    };
    return (_jsx("input", { id: v4(), name: v4(), style: { width: width || '100%' }, className: `border-[1px] border-gray-300 rounded-md p-1 focus:ring-gray-400 ${className}`, autoComplete: "new-password", placeholder: placeholder, onChange: handleChange, "aria-label": "input", value: value, type: type, readOnly: readonly }));
};
export default InputSimple;
//# sourceMappingURL=InputSimple.js.map