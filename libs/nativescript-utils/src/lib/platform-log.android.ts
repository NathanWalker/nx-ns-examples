const logTag = 'ns-android';
export function platformLog(msg: string, tag?: string): void {
    android.util.Log.d(tag || logTag, msg)
}
