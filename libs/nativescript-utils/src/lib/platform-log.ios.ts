const logTag = 'ns-ios';
export function platformLog(msg: string, tag?: string): void {
    __nslog(`${tag || logTag} ${msg}`);
}
