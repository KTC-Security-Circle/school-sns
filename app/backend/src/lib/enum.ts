export const UserRole = {
  ADMIN: 'ADMIN',
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
}

export type UserRole = (typeof UserRole)[keyof typeof UserRole]
