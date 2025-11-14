import { IFlowBlock } from './client.types.js';
/**
 * Execution environment mode
 */
export declare enum ExecutionEnvironmentModeEnum {
    DEV = "DEV",
    PROD = "PROD"
}
/**
 * Execution history logging level
 */
export declare enum IFlowExecutionHistoryLevelEnum {
    UseDefault = "USE_DEFAULT",
    TimeLimitedErroredWithData = "TIME_LIMITED_ERRORED_WITH_DATA",
    TimeLimitedAllWithData = "TIME_LIMITED_ALL_WITH_DATA",
    ErroredFullWithData = "ERRORED_WITH_DATA",
    ErroredNoData = "ERRORED_NO_DATA",
    All = "ALL"
}
/**
 * Block execution status
 */
export declare enum BlockExecutionStatusEnum {
    OK = "OK",
    ERROR = "ERROR",
    TERMINATED = "TERMINATED"
}
/**
 * Flow edge data structure
 */
export interface IFlowEdgeData {
    /** The actual data payload (primary data field) */
    payload?: any;
    /** Edge data payload (legacy field) */
    data?: any;
    /** Batch processing information */
    batchItems?: BatchStackItem[];
    /** Edge label */
    label?: string;
    /** Error message if edge data failed to process */
    edgeDataErrorMsg?: string;
}
/**
 * Flow edge structure
 */
export interface IFlowEdge {
    /** Edge ID */
    id: string;
    /** Source block ID */
    source: string;
    /** Target block ID */
    target: string;
    /** Source handle ID */
    sourceHandle?: string;
    /** Target handle ID */
    targetHandle?: string;
    /** Edge data */
    data?: IFlowEdgeData;
}
/**
 * Batch processing stack item
 */
export interface BatchStackItem {
    /** Current iteration count */
    iterations: number;
    /** Current offset */
    offset: number;
    /** Block that initiated the batch */
    originatorBlock: IFlowBlock;
    /** Block that ends the batch */
    endBlock?: IFlowBlock;
    /** Paging token for paginated data sources */
    paging?: string;
    /** Set of edges encountered during batch processing */
    encounteredEdges?: Set<any>;
    /** Flag indicating no more data is available */
    noMoreData: boolean;
    /** Flag indicating batch has been terminated */
    batchTerminated: boolean;
    /** Size of the current batch */
    batchSize: number;
    /** Current index within the batch */
    index: number;
    /** Optional function to close streams (e.g., database cursors) */
    closeStreamFn?: Function;
    /** Additional batch-specific data */
    extraData?: object;
    /** Timestamp of last execution in milliseconds */
    lastExecutionTime?: number;
}
/**
 * Batch processing stack properties (full server-side version)
 * This is the complete type returned by getBatchStackItem and used by server implementations
 */
export interface BatchStackProps {
    /** Block that initiated the batch */
    originatorBlock: IFlowBlock;
    /** Block that ends the batch (null if not yet determined) */
    endBlock: IFlowBlock | null;
    /** Current offset in the batch processing */
    offset: number;
    /** Paging token for paginated data sources */
    paging: string;
    /** Current iteration count */
    iterations: number;
    /** Set of edges encountered during batch processing */
    encounteredEdges: Set<any>;
    /** Flag indicating no more data is available */
    noMoreData: boolean;
    /** Flag indicating batch has been terminated */
    batchTerminated: boolean;
    /** Size of the current batch */
    batchSize: number;
    /** Current index within the batch */
    index: number;
    /** Optional function to close streams (e.g., database cursors) */
    closeStreamFn?: Function;
    /** Additional batch-specific data */
    extraData?: object;
    /** Timestamp of last execution in milliseconds */
    lastExecutionTime?: number;
}
/**
 * Fatal error object
 */
export interface FatalError {
    /** Whether a fatal error occurred */
    isFatalError: boolean;
    /** Error message */
    msg: string;
    /** Block ID where error occurred */
    blockId?: string;
}
/**
 * Timeout configuration
 */
export interface TimeoutObject {
    /** Whether execution timed out */
    isTimeout: boolean;
    /** Timeout duration in ms */
    timeout: number;
}
/**
 * UI log message
 */
export interface UILogMsg {
    /** Log level */
    level: string;
    /** Log message */
    message: string;
    /** Timestamp */
    timestamp: Date;
    /** Block ID */
    blockId?: string;
}
/**
 * Main execution props passed to every block's execute function
 */
export interface BlockExecutionProps {
    /** Execution counter */
    executionCounter: number;
    /** Unique execution UUID */
    executionUuid: string;
    /** External execution ID (optional) */
    externalExecutionId?: string;
    /** Whether console logging is enabled */
    clogging: boolean;
    /** Flow model being executed */
    flow: any;
    /** Execution environment (DEV/PROD) */
    environmentMode: ExecutionEnvironmentModeEnum;
    /** Stack of blocks to execute */
    blockStack: IFlowBlock[];
    /** Available data structures */
    structures: any[];
    /** Error object for fatal errors */
    errorObject: FatalError;
    /** Timeout configuration */
    timeoutObject: TimeoutObject;
    /** Whether execution was killed */
    isKilled: boolean;
    /** Response data from execution */
    responseData: any;
    /** Whether debug mode is enabled */
    isDebug: boolean;
    /** Whether step mode is enabled */
    isStep: boolean;
    /** Block ID to pause at (debug) */
    pauseAtBlockId?: string;
    /** Whether this is a test execution */
    isTest: boolean;
    /** Execution history logging level */
    executionHistoryLevel: IFlowExecutionHistoryLevelEnum;
    /** Marshaller service instance */
    marshallerSvc: any;
    /** Block registry service instance (for plugin blocks) */
    blockRegistry?: any;
    /**
     * Log execution time for a block
     * @param props - Execution props
     * @param block - Block being executed
     * @param inEdgeData - Input edge data
     * @param outEdges - Output edges
     * @param time - Execution time in ms
     * @param isRawInputData - Whether input is raw data
     */
    logTime: (props: BlockExecutionProps, block: IFlowBlock, inEdgeData: IFlowEdgeData | IFlowEdgeData[] | any[][], outEdges: IFlowEdge | IFlowEdge[], time: number, isRawInputData?: boolean) => void;
    /** The block currently being executed */
    blockToExecute?: IFlowBlock;
    /**
     * Remove a block from the execution stack
     * @param id - Block ID to remove
     * @param stack - The block stack
     */
    stackRemove?: (id: string, stack: IFlowBlock[]) => void;
    /**
     * Add a block to the execution stack
     * @param block - Block to add
     * @param stack - The block stack
     */
    stackAdd?: (block: IFlowBlock, stack: IFlowBlock[]) => void;
    /** UI log messages */
    uiLogMessages: UILogMsg[];
    /** Whether to send socket messages */
    sendSocketMessages: boolean;
    /** Console messages */
    consoleMessages: any[];
    /** Batch processing stack */
    batchStack: BatchStackItem[];
    /** Current batch index */
    batchIndex: number | null;
    /** Flow variables storage */
    variables: Record<string, any>;
    /** Execution key for tracking */
    executionKey?: string;
    /** Socket ID for real-time updates */
    socketId?: string;
    /** JWT token for authentication */
    jwtToken?: string;
    /** Auth provider */
    provider?: string;
    /** User ID */
    userId?: string;
    /** Tenant ID for multi-tenancy */
    tenantId?: string;
    /** Whether execution should terminate */
    terminate: boolean;
    /** Timeout timer handle */
    timeoutTimer?: NodeJS.Timeout | null;
    /** Flow debug instance */
    flowDebug: any;
    /** Job group identifier */
    jobGroup?: string;
    /**
     * Get input edge data for a specific block and input index
     * @param block - The block to get input data for
     * @param inputIndex - The input handle index (default: 0)
     * @returns The edge data if found, undefined otherwise
     */
    getInputEdgeData: (block: IFlowBlock, inputIndex?: number) => IFlowEdgeData | undefined;
    /**
     * Assign data to outgoing edges and add next blocks to the execution stack
     * @param block - The current block
     * @param edgeIndex - The output handle index
     * @param inputEdgeData - The input edge data (or null if no input)
     * @param outputEdgeData - The data to send to the output edge(s)
     * @param batchItem - Optional batch item for batch processing
     * @returns Array of edges that were processed
     */
    outgoingEdgeAssignment: (block: IFlowBlock, edgeIndex: number, inputEdgeData: IFlowEdgeData | null, outputEdgeData: any, batchItem?: any) => any[];
    /**
     * Formulate a fatal error that will stop flow execution
     * @param block - The block where the error occurred
     * @param message - The error message
     */
    formulateFatalError: (block: IFlowBlock, message: string) => void;
    /**
     * Log a message to the console and execution logs
     * @param block - The block logging the message
     * @param message - The message to log
     * @param level - The log level (default: 'info')
     */
    logMessage: (block: IFlowBlock, message: string, level?: 'info' | 'warn' | 'error' | 'debug') => void;
    /**
     * Validate that a config object contains required properties
     * @param config - The configuration object to validate
     * @param requiredProps - Array of required property names
     * @throws Error if any required properties are missing
     */
    validateConfig: (config: any, requiredProps: string[]) => void;
    /**
     * Safely wait for input edge data to arrive at a specific input handle
     * Handles flow termination gracefully by returning null if terminated
     * @param blockId - The block ID to wait for data on
     * @param handleId - The input handle ID (e.g., 'i0', 'i1')
     * @returns The edge data if received, null if flow terminated
     */
    safeWaitForInputEdgeData: (blockId: string, handleId: string) => Promise<IFlowEdgeData | null>;
    /**
     * Safely wait for all input edge data to arrive at a block
     * Waits until all incoming edges have data, then returns them sorted by handle (i0, i1, i2, etc.)
     * Handles flow termination gracefully by returning null if terminated
     * @param block - The block to wait for all input data on
     * @returns Array of edge data sorted by input handle, or null if flow terminated
     */
    safeWaitForAllInputEdgeData: (block: IFlowBlock) => Promise<IFlowEdgeData[] | null>;
    /**
     * Get or create a batch stack item for the current block
     * Used by blocks that initiate batch processing (Iterator, Loop, etc.)
     * @param block - The block initiating the batch
     * @returns The batch stack properties with iteration state
     */
    getBatchStackItem: (block: IFlowBlock) => BatchStackProps;
    /**
     * Terminate a batch processing loop
     * Removes batch from stack, closes streams, and routes to next blocks
     * @param batchItem - The batch stack properties to terminate
     */
    terminateBatch: (batchItem: BatchStackProps) => void;
    /**
     * Checks if a batch should be terminated based on iteration limits and data availability
     * Automatically terminates the batch if conditions are met
     * @param batchItem - The batch stack item to check
     * @param maxIterations - Maximum number of iterations allowed (0 or undefined means no limit)
     * @returns true if batch was terminated, false otherwise
     */
    shouldTerminateBatchHelper: (batchItem: BatchStackProps, maxIterations: number) => boolean;
}
/**
 * Block execution result
 */
export interface BlockExecutionResult {
    status: BlockExecutionStatusEnum;
    error: Error | null;
}
