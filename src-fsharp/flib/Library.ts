import { int32 } from "./fable_modules/fable-library-ts.4.25.0/Int32.js";
import { printf, toConsole } from "./fable_modules/fable-library-ts.4.25.0/String.js";

export function hello(name: string): string {
    return "Hello " + name;
}

export function sum(x: int32, y: int32): int32 {
    return x + y;
}

export function print(message: string): void {
    toConsole(printf("= %s"))(message);
}

