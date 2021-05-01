export interface EmployeeRecord {
  userId: string
  employeeId: string
  fullname: string
  position: string
  gender: string
  age: string
  isManager: boolean
  contractStartAt: string
  contractExpiredAt: string
  photo?: string
}
