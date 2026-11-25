export const USER_ROLE = {
  STUDENT: "student",
  LECTURER: "lecturer",
  ADMIN: "admin",
  SUPERADMIN: "super_admin",
} as const;

export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];
