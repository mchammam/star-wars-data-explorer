export function getIdFromURL(url: string): number {
    return parseInt(url.split('/').at(-2)!)
}