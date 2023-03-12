import { JSXInternal } from "preact/src/jsx"

export type FormSubmitEvent = JSXInternal.TargetedEvent<HTMLFormElement, Event>
export type FieldChangeEvent = JSXInternal.TargetedEvent<HTMLInputElement | HTMLTextAreaElement, Event>

export const MONTHS = Object.freeze([
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
])
