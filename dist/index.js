/**
 * @ziggy/plugin-sdk
 *
 * SDK for developing custom Ziggy block plugins
 *
 * This package provides all the types, interfaces, and helpers needed
 * to create custom blocks that integrate with the Ziggy workflow platform.
 */
// Export all types
export * from './types/index.js';
// Export helper functions
export * from './helpers/index.js';
// Export components
export * from './components/index.js';
// Re-export commonly used helpers for convenience
export { formulateFatalError, validateConfig, logMessage, deepCopy, safeJsonParse, getInputEdgeData, outgoingEdgeAssignment, safeWaitForInputEdgeData, safeWaitForAllInputEdgeData, getBatchStackItem, terminateBatch, logTime, } from './helpers/index.js';
//# sourceMappingURL=index.js.map