import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const PopupHelp = ({ text }) => {
    const [showPopup, setShowPopup] = useState(false);
    return (_jsxs("div", { className: "relative inline-block", children: [_jsx("div", { className: "text-blue-500 cursor-pointer hover:text-blue-700 inline-flex items-center justify-center w-5 h-5 rounded-full border border-blue-500 text-xs font-bold", onClick: () => setShowPopup(!showPopup), onMouseEnter: () => setShowPopup(true), onMouseLeave: () => setShowPopup(false), children: "?" }), showPopup && (_jsx("div", { className: "absolute z-50 left-0 top-6 bg-white border border-gray-300 rounded-md shadow-lg p-3 min-w-[200px] max-w-[400px] text-sm", onClick: (e) => e.stopPropagation(), children: _jsx("div", { className: "whitespace-pre-wrap", children: text }) }))] }));
};
export default PopupHelp;
//# sourceMappingURL=PopupHelp.js.map