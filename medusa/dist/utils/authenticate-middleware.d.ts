import { RequestHandler } from "express";
type AuthType = "session" | "bearer";
export declare const authenticate: (authScope: string | RegExp, authType: AuthType | AuthType[], options?: {
    allowUnauthenticated?: boolean;
}) => RequestHandler;
export {};
