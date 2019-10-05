import { IIterator } from "iter-over";
export interface IContainer<E> {
    contains(...elements: E[]): boolean;
    size(): number;
    isEmpty(): boolean;
    toArray(): E[];
    iterator(): IIterator<E>;
    [Symbol.iterator](): IterableIterator<E>;
    clear(): void;
}
