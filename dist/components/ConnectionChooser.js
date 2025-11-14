import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import SelectItems from './SelectItems.js';
const ConnectionChooser = ({ connections, selectedUuid, onSelect, types = [], exclude = [], placeholder = 'Select a connection...', width, isDisabled = false, }) => {
    const [filteredConnections, setFilteredConnections] = useState([]);
    const [selectOptions, setSelectOptions] = useState([]);
    useEffect(() => {
        // Filter connections by type and exclude list
        let filtered = connections;
        if (types.length > 0) {
            filtered = filtered.filter(conn => types.includes(conn.type));
        }
        if (exclude.length > 0) {
            filtered = filtered.filter(conn => !exclude.includes(conn.uuid));
        }
        setFilteredConnections(filtered);
        // Convert to SelectItems format
        const options = filtered.map(conn => ({
            id: conn.uuid,
            label: conn.name,
            extraData: { type: conn.type },
        }));
        setSelectOptions(options);
        // Auto-select if only one option and no selection
        if (!selectedUuid && filtered.length === 1) {
            onSelect(filtered[0].uuid, filtered[0].type);
        }
    }, [connections, types, exclude, selectedUuid, onSelect]);
    const handleSelect = (selection) => {
        if (!selection || Array.isArray(selection)) {
            return;
        }
        const item = selection;
        const connection = filteredConnections.find(conn => conn.uuid === item.id);
        if (connection) {
            onSelect(connection.uuid, connection.type);
        }
    };
    const getSelectedItem = () => {
        if (!selectedUuid)
            return undefined;
        return selectOptions.find(opt => opt.id === selectedUuid);
    };
    return (_jsx("div", { children: _jsx(SelectItems, { items: selectOptions, selectedItem: getSelectedItem(), onSelect: handleSelect, placeholder: placeholder, clearable: false, width: width, isDisabled: isDisabled }) }));
};
export default ConnectionChooser;
//# sourceMappingURL=ConnectionChooser.js.map