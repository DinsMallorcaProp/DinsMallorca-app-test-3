// merge all strings of an arrarr split by blank

export function mergeStrings(arr) {
    arr.map((str) => `${str}`).join(' ');
}

export function formatTextSplitStr(text, splitStr, joinStr) {
    const lines = text.split(splitStr).map((sentence) => sentence.trim());
    const formattedText = lines.join(joinStr);
    return formattedText;
}

export function joinedString(json) {
    const formattedText = json.map((item) => `${item.name}`).join('\n');
    return formattedText;
}
