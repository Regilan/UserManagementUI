export interface Employee {
    employeeId: number, // change number to string
    firstName: string,
    lastName: string,
    emailId: string,
    userRole: UserRole,
    status: boolean
}

enum UserRole {
    MANAGER, DEVELOPER, TESTER
}