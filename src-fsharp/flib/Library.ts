import { int32 } from "./fable_modules/fable-library-ts.4.25.0/Int32.js";

export function hello(name: string): string {
    return "Hello " + name;
}

export function sum(x: int32, y: int32): int32 {
    return x + y;
}

