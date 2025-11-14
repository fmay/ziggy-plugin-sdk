/**
 * Execution environment mode
 */
export var ExecutionEnvironmentModeEnum;
(function (ExecutionEnvironmentModeEnum) {
    ExecutionEnvironmentModeEnum["DEV"] = "DEV";
    ExecutionEnvironmentModeEnum["PROD"] = "PROD";
})(ExecutionEnvironmentModeEnum || (ExecutionEnvironmentModeEnum = {}));
/**
 * Execution history logging level
 */
export var IFlowExecutionHistoryLevelEnum;
(function (IFlowExecutionHistoryLevelEnum) {
    IFlowExecutionHistoryLevelEnum["UseDefault"] = "USE_DEFAULT";
    IFlowExecutionHistoryLevelEnum["TimeLimitedErroredWithData"] = "TIME_LIMITED_ERRORED_WITH_DATA";
    IFlowExecutionHistoryLevelEnum["TimeLimitedAllWithData"] = "TIME_LIMITED_ALL_WITH_DATA";
    IFlowExecutionHistoryLevelEnum["ErroredFullWithData"] = "ERRORED_WITH_DATA";
    IFlowExecutionHistoryLevelEnum["ErroredNoData"] = "ERRORED_NO_DATA";
    IFlowExecutionHistoryLevelEnum["All"] = "ALL";
})(IFlowExecutionHistoryLevelEnum || (IFlowExecutionHistoryLevelEnum = {}));
/**
 * Block execution status
 */
export var BlockExecutionStatusEnum;
(function (BlockExecutionStatusEnum) {
    BlockExecutionStatusEnum["OK"] = "OK";
    BlockExecutionStatusEnum["ERROR"] = "ERROR";
    BlockExecutionStatusEnum["TERMINATED"] = "TERMINATED";
})(BlockExecutionStatusEnum || (BlockExecutionStatusEnum = {}));
//# sourceMappingURL=server.types.js.map