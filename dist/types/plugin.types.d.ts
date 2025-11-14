import { BlockDefinitionProps, BlockMetadata } from './client.types.js';
import { BlockExecutionProps } from './server.types.js';
/**
 * Main plugin manifest that defines all blocks and collections in the plugin
 */
export interface PluginManifest {
    /** Unique plugin name (e.g., "@my-company/custom-crm") */
    name: string;
    /** Semantic version (e.g., "1.0.0") */
    version: string;
    /** Human-readable description of what this plugin provides */
    description: string;
    /** Plugin author or organization */
    author: string;
    /** Array of block definitions provided by this plugin */
    blocks: PluginBlockDefinition[];
    /** Optional collections to group related blocks */
    collections?: PluginCollectionDefinition[];
    /** NPM dependencies required by this plugin */
    dependencies?: Record<string, string>;
}
/**
 * Complete block definition including both client UI and server execution
 */
export interface PluginBlockDefinition {
    /** Client-side block definition (UI, metadata) */
    client: {
        /** Block definition for the flow editor */
        blockDefinition: BlockDefinitionProps;
        /** Block metadata (info text, icon, help file) */
        metadata: BlockMetadata;
        /** Optional AI-related information for AI-assisted flow building */
        aiInfo?: AIBlockInfo;
    };
    /** Server-side execution function */
    server: {
        /** Async function that executes the block logic */
        execute: (props: BlockExecutionProps) => Promise<void>;
    };
}
/**
 * Optional collection grouping for organizing related blocks
 */
export interface PluginCollectionDefinition {
    /** Collection display name */
    collectionName: string;
    /** Collection description */
    collectionDescription: string;
    /** Array of block types belonging to this collection */
    blockIds: string[];
}
/**
 * AI-related metadata for a block
 */
export interface AIBlockInfo {
    /** Brief summary for AI context */
    summary: string;
    /** Detailed description of block functionality */
    description: string;
    /** Keywords for search and discovery */
    keyWords: string[];
    /** Additional AI-specific information */
    aiInfo: string;
    /** Block property descriptions for AI */
    props: Record<string, any>;
}
/**
 * Plugin registration data transfer object
 */
export interface RegisterPluginDto {
    /** Plugin type: 'npm' for packages, 'local' for file paths */
    type: 'npm' | 'local';
    /** Package name (for npm) or file path (for local) */
    source: string;
    /** Optional configuration for the plugin */
    config?: Record<string, any>;
}
/**
 * Plugin registry database model
 */
export interface PluginRegistryModel {
    id: string;
    name: string;
    version: string;
    type: 'npm' | 'local';
    source: string;
    enabled: boolean;
    installedAt: Date;
    updatedAt: Date;
    config: Record<string, any>;
    metadata: PluginManifest;
}
/**
 * Plugin block database model
 */
export interface PluginBlockModel {
    id: string;
    pluginId: string;
    blockType: string;
    blockName: string;
    blockGroup: string;
    metadata: any;
    createdAt: Date;
}
