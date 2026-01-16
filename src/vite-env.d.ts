/// <reference types="vite/client" />

declare type SwapCallback = (event: SwapEventData) => void;

declare type SwapEventArray = Array<{
    slot: string;
    item: string | null;
}>;

declare interface SwapEventData {
    data: SwapEventDataData;
}

declare interface SwapEventDataData {
    map: SwapEventMap;
    array: SwapEventArray;
    object: SwapEventObject;
}

declare type SwapEventMap = Map<string, string | null>;

declare type SwapEventObject = Record<string, string | null>;

declare interface SwapyApi {
    onSwap(callback: SwapCallback): void;
    enable(enabled: boolean): void;
}

declare module 'swapy' {
    export function createSwapy(root: Element | null, config?: any): SwapyApi;
}