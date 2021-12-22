/**
 * @packageDocumentation
 * @module api.functional.monitors.system
 */
//================================================================
import { AesPkcs5, Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { ISystem } from "./../../../structures/monitors/ISystem";

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller SystemController.get()
 * @path GET /monitors/system
 */
export function get
    (
        connection: IConnection
    ): Promise<get.Output>
{
    return Fetcher.fetch
    (
        connection,
        get.ENCRYPTED,
        get.METHOD,
        get.path()
    );
}
export namespace get
{
    export type Output = Primitive<ISystem>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/monitors/system";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(): string
    {
        return `/monitors/system`;
    }
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller SystemController.sleep()
 * @path GET /monitors/system/:ms
 */
export function sleep
    (
        connection: IConnection,
        ms: number
    ): Promise<sleep.Output>
{
    return Fetcher.fetch
    (
        connection,
        sleep.ENCRYPTED,
        sleep.METHOD,
        sleep.path(ms)
    );
}
export namespace sleep
{
    export type Output = Primitive<ISystem>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/monitors/system/:ms";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(ms: number): string
    {
        return `/monitors/system/${ms}`;
    }
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;