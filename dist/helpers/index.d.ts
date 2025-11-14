/**
 * Helper Functions for Plugin Development
 *
 * These helpers delegate to the functions injected into BlockExecutionProps
 * for consistent behavior across core and plugin blocks.
 */
import { BlockExecutionProps, IFlowEdgeData, IFlowBlock, IFlowEdge, BatchStackProps } from '../types';
/**
 * Formulates a fatal error and sets it on the execution props
 * This will stop flow execution and report the error to the user
 *
 * @param props - Block execution props
 * @param block - Block where error occurred
 * @param msg - Error message or stack trace
 */
export declare function formulateFatalError(props: BlockExecutionProps, block: IFlowBlock, msg: string): void;
/**
 * Helper to get input edge data for a block
 *
 * @param props - Block execution props
 * @param block - The block to get input data for
 * @param inputIndex - Index of the input edge (default 0)
 * @returns Edge data or undefined
 */
export declare function getInputEdgeData(props: BlockExecutionProps, block: IFlowBlock, inputIndex?: number): IFlowEdgeData | undefined;
/**
 * Assigns data to outgoing edges and adds next blocks to the execution stack
 * This is the standard way to output data from a block
 *
 * @param props - Block execution props
 * @param block - Current block
 * @param edgeIndex - Output edge index (0 for first output, 1 for second, etc.)
 * @param inputEdgeData - Input edge data (for passing through batch info)
 * @param outputEdgeData - Data to send to the next block(s)
 * @param batchItem - optional batchItem data
 * @returns Array of output edges
 */
export declare function outgoingEdgeAssignment(props: BlockExecutionProps, block: IFlowBlock, edgeIndex: number, inputEdgeData: IFlowEdgeData | null, outputEdgeData: any, batchItem?: BatchStackProps | BatchStackProps[]): any[];
/**
 * Deep copy helper for safely cloning objects
 *
 * @param obj - Object to clone
 * @returns Deep cloned object
 */
export declare function deepCopy<T>(obj: T): T;
/**
 * Validates that required configuration properties exist
 *
 * @param config - Block configuration object
 * @param requiredProps - Array of required property names
 * @throws Error if required properties are missing
 */
export declare function validateConfig(config: any, requiredProps: string[]): void;
/**
 * Safe JSON parse with default value
 *
 * @param str - JSON string to parse
 * @param defaultValue - Default value if parsing fails
 * @returns Parsed object or default value
 */
export declare function safeJsonParse<T>(str: string, defaultValue: T): T;
/**
 * Logs a message to the console with block context
 *
 * @param props - Block execution props
 * @param block - Block context
 * @param message - Message to log
 * @param level - Log level (default: 'info')
 */
export declare function logMessage(props: BlockExecutionProps, block: IFlowBlock, message: string, level?: 'info' | 'warn' | 'error' | 'debug'): void;
/**
 * Safely waits for input edge data to arrive at a specific input handle
 * Handles flow termination gracefully by returning null if the flow is terminated
 * This is useful for blocks that need to wait for async data arrival
 *
 * @param props - Block execution props
 * @param blockId - The block ID to wait for data on
 * @param handleId - The input handle ID (e.g., 'i0', 'i1')
 * @returns Promise that resolves to edge data if received, null if flow terminated
 *
 * @example
 * const input = await safeWaitForInputEdgeData(props, block.id, 'i0')
 * if (!input) return  // Flow terminated, exit gracefully
 * const payload = input.payload
 */
export declare function safeWaitForInputEdgeData(props: BlockExecutionProps, blockId: string, handleId: string): Promise<IFlowEdgeData | null>;
/**
 * Safely waits for all input edge data to arrive at a block
 * Waits until all incoming edges have data, then returns them sorted by handle (i0, i1, i2, etc.)
 * Handles flow termination gracefully by returning null if the flow is terminated
 * This is useful for blocks that need to merge or process multiple inputs together
 *
 * @param props - Block execution props
 * @param block - The block to wait for all input data on
 * @returns Promise that resolves to array of edge data sorted by input handle, or null if flow terminated
 *
 * @example
 * const inputData = await safeWaitForAllInputEdgeData(props, block)
 * if (!inputData) return  // Flow terminated, exit gracefully
 * const payloads = inputData.map(edge => edge.payload)
 * // payloads[0] is from i0, payloads[1] is from i1, etc.
 */
export declare function safeWaitForAllInputEdgeData(props: BlockExecutionProps, block: IFlowBlock): Promise<IFlowEdgeData[] | null>;
/**
 * Gets or creates a batch stack item for the current block
 * Used by blocks that initiate batch processing (Iterator, Loop, etc.)
 * Manages batch iteration counters and state
 *
 * @param props - Block execution props
 * @param block - The block initiating the batch
 * @returns The batch stack properties with iteration state
 *
 * @example
 * const batchItem = getBatchStackItem(props, block)
 * if (batchItem.offset >= config.maxIterations) {
 *   terminateBatch(props, batchItem)
 *   return
 * }
 * batchItem.offset++
 */
export declare function getBatchStackItem(props: BlockExecutionProps, block: IFlowBlock): BatchStackProps;
/**
 * Terminates a batch processing loop
 * Removes the batch item from the stack, closes any open streams,
 * and routes execution to blocks after the batch end block
 *
 * @param props - Block execution props
 * @param batchItem - The batch stack properties to terminate
 *
 * @example
 * const data = await fetchBatchData(config, batchItem.offset)
 * if (data.length === 0) {
 *   terminateBatch(props, batchItem)
 *   return
 * }
 */
export declare function terminateBatch(props: BlockExecutionProps, batchItem: BatchStackProps): void;
/**
 * Logs block execution time and data metrics
 * Records input/output data array lengths for monitoring and performance tracking
 *
 * @param props - Block execution props
 * @param block - Block being logged
 * @param inEdgeData - Input edge data (can be single edge, array of edges, or raw data arrays)
 * @param outEdges - Output edges (single or array)
 * @param time - Execution time in milliseconds
 * @param isRawInputData - Whether input is raw data arrays vs edge data structures
 *
 * @example
 * const startTime = new Date()
 * // ... block execution logic ...
 * block.data.executionTime = new Date().getTime() - startTime.getTime()
 * logTime(props, block, [inputEdge], outEdges, block.data.executionTime)
 */
export declare function logTime(props: BlockExecutionProps, block: IFlowBlock, inEdgeData: IFlowEdgeData | IFlowEdgeData[] | any[][], outEdges: IFlowEdge | IFlowEdge[], time: number, isRawInputData?: boolean): void;
/**
 * Checks if a batch should be terminated based on iteration limits and data availability
 * Automatically terminates the batch if conditions are met
 *
 * @param props - Block execution props
 * @param batchItem - The batch stack item to check
 * @param maxIterations - Maximum number of iterations allowed (0 or undefined means no limit)
 * @returns true if batch was terminated, false otherwise
 *
 * @example
 * const batchItem = getBatchStackItem(props, block)
 * if (shouldTerminateBatchHelper(props, batchItem, config.maxIterations)) {
 *   return  // Batch has been terminated, exit block
 * }
 * // Continue processing...
 */
export declare function shouldTerminateBatchHelper(props: BlockExecutionProps, batchItem: BatchStackProps, maxIterations: number): boolean;
