export function getUUID(): string {
    return Math.random().toString(36).substr(3, 19);
}
