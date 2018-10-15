type FunctionType = (...args: any[]) => any;
type ActionCreator = { [creator: string]: FunctionType };
export type ActionUnion<A extends ActionCreator> = ReturnType<A[keyof A]>;