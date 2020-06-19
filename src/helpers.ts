export function env(env: string | undefined, defaults: string | number | null): string | number | null {
    if (env == undefined) {
        return defaults
    }
    return env
}
