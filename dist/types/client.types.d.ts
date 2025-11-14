import { ComponentType } from 'react';
/**
 * Enums for block configuration
 */
export declare enum BlockGroupEnum {
    Core = "Core",
    Utility = "Utility",
    Collection = "Collection",
    Custom = "Custom"
}
export declare enum StyleTypeEnum {
    standard = "STANDARD"
}
export declare enum BlockTypeSpecialEnum {
    Receiver = "RECEIVER",
    Terminator = "TERMINATOR"
}
/**
 * Block position in the flow editor
 */
export interface IFlowBlockPosition {
    x: number;
    y: number;
}
/**
 * Block data containing all configuration and metadata
 */
export interface IFlowBlockData {
    /** Block type identifier (must be unique across all blocks) */
    type: string;
    /** Special block designation (Receiver, Terminator) */
    special?: BlockTypeSpecialEnum;
    /** Display name of the block */
    name: string;
    /** User-friendly name override */
    friendlyName?: string;
    /** Block version number */
    version?: number;
    /** Help text */
    help?: string;
    /** Path to help documentation file */
    helpFile?: string;
    /** Whether block configuration is valid */
    isValid: boolean;
    /** Whether block is collapsed in UI */
    collapse?: boolean;
    /** Block category (Core, Utility, Collection, Custom) */
    group: BlockGroupEnum;
    /** Visual style type */
    styleType: StyleTypeEnum;
    /** Number of input connection points */
    numInputs: number;
    /** Number of output connection points */
    numOutputs: number;
    /** Whether block has internal output handles */
    hasInternalOutputHandles: boolean;
    /** Whether block has internal input handles */
    hasInternalInputHandles: boolean;
    /** Custom header color (hex code) */
    headerColor?: string;
    /** Block-specific configuration object */
    config: any | string;
    /** Whether block is currently active/executing */
    isActive?: boolean;
    /** Last execution time in milliseconds */
    executionTime?: number;
    /** Additional custom data */
    extraData?: any;
    /** Internal flag for waiting on edge data */
    waitingForAllEdgeData?: boolean;
    /** Queue UUID for async processing */
    queueUuid?: string;
}
/**
 * Complete block structure in the flow
 */
export interface IFlowBlock {
    /** Unique block instance ID */
    id: string;
    /** Block type identifier */
    type: string;
    /** Block width in pixels */
    width: number;
    /** Block height in pixels */
    height: number;
    /** Position in the flow canvas */
    position: IFlowBlockPosition;
    /** Whether block is selected */
    selected?: boolean;
    /** Block data and configuration */
    data: IFlowBlockData;
}
/**
 * Flow API for plugin components to interact with the flow store
 *
 * NOTE: This interface is duplicated in shared/blocks/base/FlowAPI.types.ts
 * Both definitions MUST be kept in sync manually.
 *
 * This duplication exists to avoid backwards dependency:
 * - Plugin SDK defines this (here) for external plugins
 * - Main app has its own copy to avoid importing from plugin SDK
 * - Both are structurally identical so TypeScript treats them as compatible
 */
export interface FlowAPI {
    /** Update block configuration and trigger save */
    updateBlock: (nodeId: string, block: IFlowBlockData) => void;
    /** Update number of output connections */
    updateNumOutputs: (nodeId: string, numOutputs: number) => void;
}
/**
 * Props passed to block React components
 */
export interface BlockComponentProps {
    /** Unique node ID */
    nodeId: string;
    /** Block data */
    block: IFlowBlockData;
    /** Whether block is collapsed */
    collapse: boolean;
    /** Flow API for updating block state */
    flowApi: FlowAPI;
}
/**
 * Block definition for registration
 */
export interface BlockDefinitionProps {
    /** Block structure with default configuration */
    block: IFlowBlock;
    /** Base React component type for rendering */
    baseNodeType: ComponentType<any>;
    /** Custom React component for block body */
    component: ComponentType<BlockComponentProps>;
    /** Optional collection designation */
    collection?: undefined;
}
/**
 * Collection definition for grouping blocks
 */
export interface CollectionDefinitionProps {
    /** Collection display name */
    collectionName: string;
    /** Collection description */
    collectionDescription: string;
    /** Array of block definitions in this collection */
    blocks: BlockDefinitionProps[];
}
/**
 * File-based icon specification
 */
export interface IconFile {
    /** Discriminator for type checking */
    type: 'file';
    /** Image format */
    format: 'svg' | 'png' | 'jpg' | 'jpeg';
    /** Path to icon file relative to plugin root (e.g., 'assets/icon.svg') */
    path: string;
    /** Runtime URL (populated by server) */
    url?: string;
}
/**
 * Icon source - either a React component or a file-based icon
 */
export type IconSource = ComponentType | IconFile;
/**
 * Block metadata (info, icon, help file)
 */
export interface BlockMetadata {
    /** Short description of block functionality */
    info: string;
    /** Path to help documentation (relative to docs root) */
    helpFile?: string;
    /** React icon component or file-based icon */
    icon: IconSource;
}
