export declare function mergeDeep(target: Record<string, any>, source: Record<string, any>): Record<string, any>;
export declare const mergeByProperty: (target: [], source: [], prop: string) => [];
interface IObject {
    [key: string]: any;
}
type TUnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export declare const isObject: (obj: any) => boolean;
export declare const merge: {
    <T extends IObject[]>(...objects: T): TUnionToIntersection<T[number]>;
    options: IOptions;
    withOptions<T_1 extends IObject[]>(options: Partial<IOptions>, ...objects: T_1): TUnionToIntersection<T_1[number]>;
};
interface IOptions {
    mergeArrays: boolean;
}
export default merge;
//# sourceMappingURL=MergeObject.d.ts.map