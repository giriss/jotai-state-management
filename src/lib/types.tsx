import { JSXInternal } from "preact/src/jsx"

export type FormSubmitEvent = JSXInternal.TargetedEvent<HTMLFormElement, Event>
export type FieldChangeEvent = JSXInternal.TargetedEvent<HTMLInputElement | HTMLTextAreaElement, Event>
