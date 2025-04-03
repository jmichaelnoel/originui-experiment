export type CalendarView = "month" | "week" | "day" | "agenda"

export interface CalendarEvent {
  id: string
  title: string
  description?: string
  start: Date
  end: Date
  allDay?: boolean
  color?: EventColor
  label?: string
  location?: string
}

export type EventColor =
  | "blue"
  | "amber"
  | "violet"
  | "rose"
  | "emerald"
