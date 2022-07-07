
export function cleanPrivateKey(key) {
    if (key.indexOf('0x') == 0) {
        key = key.slice(2)
    }

    return key
}
