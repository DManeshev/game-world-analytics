export const regexpTags = (str: string) => {
    const newStr = str.replace(/(<([^>]+)>)/ig, ' ');

    return newStr
}