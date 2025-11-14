import { FC } from 'react';
/**
 * Simplified ConnectionChooser component for Ziggy plugins
 * Unlike the main app version, connections must be provided as props
 */
export interface Connection {
    uuid: string;
    name: string;
    type: string;
}
export interface ConnectionChooserProps {
    /** Array of available connections to choose from */
    connections: Connection[];
    /** Currently selected connection UUID */
    selectedUuid?: string;
    /** Callback when a connection is selected */
    onSelect: (uuid: string, type: string) => void;
    /** Filter connections by types (optional) */
    types?: string[];
    /** Exclude specific connection UUIDs (optional) */
    exclude?: string[];
    /** Placeholder text (optional) */
    placeholder?: string;
    /** Width in pixels (optional) */
    width?: number;
    /** Whether the selector is disabled */
    isDisabled?: boolean;
}
declare const ConnectionChooser: FC<ConnectionChooserProps>;
export default ConnectionChooser;
