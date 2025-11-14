/**
 * @ziggy/plugin-sdk
 *
 * SDK for developing custom Ziggy block plugins
 *
 * This package provides all the types, interfaces, and helpers needed
 * to create custom blocks that integrate with the Ziggy workflow platform.
 */
export * from './types/index.js';
export * from './helpers/index.js';
export * from './components/index.js';
export type { PluginManifest, PluginBlockDefinition, PluginCollectionDefinition, RegisterPluginDto, BlockExecutionProps, IFlowBlock, IFlowBlockData, IFlowEdgeData, IFlowEdge, BatchStackItem, BatchStackProps, BlockDefinitionProps, BlockMetadata, IconFile, IconSource, FlowAPI, } from './types/index.js';
export { formulateFatalError, validateConfig, logMessage, deepCopy, safeJsonParse, getInputEdgeData, outgoingEdgeAssignment, safeWaitForInputEdgeData, safeWaitForAllInputEdgeData, getBatchStackItem, terminateBatch, logTime, } from './helpers/index.js';
