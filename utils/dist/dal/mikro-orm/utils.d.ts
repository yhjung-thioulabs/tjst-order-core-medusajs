import { SqlEntityManager } from "@mikro-orm/postgresql";
export declare const mikroOrmUpdateDeletedAtRecursively: <T extends object = any>(manager: SqlEntityManager, entities: (T & {
    id: string;
    deleted_at?: string | Date | null | undefined;
})[], value: Date | null) => Promise<void>;
export declare const mikroOrmSerializer: <TOutput extends object>(data: any, options?: any) => Promise<TOutput>;
