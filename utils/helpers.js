function extract(str, regex){
    const result = str.match(regex);
    if(!result){
        throw new Error("Invalid format");
    }
    return result[0];
}

module.exports = extract;