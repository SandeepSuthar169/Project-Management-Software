export const UserRolesEnum = {
    ADMIN:  "admin",
    PROJECT_ADMIN:  "project_admin",
    MEMBER: "member"
}

export const AvailableUserRoles = Object.values(UserRolesEnum)

export const TaskStatusEnum = {
    TODO:"todo",
    IN_PROGRESS: "in_progress",
    DONE: "done"
};
export const AvailableTaskStatuses = Object.values(TaskStatusEnum)


export const BoardTages = {
    NOT_STARTED: "not_started",
    IN_PROGRESS: "in_progress",
    COMPLETED: "completed",
    REWORKING: "reworking",
    DONE: "done",
    TESTING: "testing"
}
export const AvailableBoardTages = Object.values(BoardTages)


export const BoardPriority = {
    LOWEST: "lowest",
    LOW: "low",
    HIGH: "high",
    HIGHEST: "highest"
}
export const AvailableBoardPriority = Object.values(BoardPriority)
