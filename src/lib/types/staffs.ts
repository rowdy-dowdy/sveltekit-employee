type Attendance = {
  id: number,
  staff_uid: number,
  record_time: Date,
}

type Staff = {
  id: number,
  name: string,
  attendances: Attendance[]
}

export type {
  Staff,
  Attendance
}