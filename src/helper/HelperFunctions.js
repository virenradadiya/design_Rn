const logprint = true;
export function logfunction(tag, message) {
    if (logprint) {
        console.log(tag, message)
    }
}