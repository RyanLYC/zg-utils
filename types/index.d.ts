/// <reference path="./url.d.ts" />
/// <reference path="./function.d.ts" />
/// <reference path="./object.d.ts" />
/// <reference path="./regexp.d.ts" />
/// <reference path="./useEventListener.d.ts" />

export interface ObjectTypes<T = any> {
  [key: string]: T
}

export declare type TargetValue<T> = T | undefined | null

export declare type TargetType = HTMLElement | Element | Window | Document

export declare type BasicTarget<T extends TargetType = Element> = (() => TargetValue<T>) | TargetValue<T> | Ref<TargetValue<T>>

export declare type noop = (...p: any) => void
