export const createID = (index : string) => {
    // index = array-10, 10 is the size.
    // convention : abc : name, -var : type/size, -number : unique serial number

    const id = index.split('-');
    // console.log(id.at(-1))
    id[id.length - 1] = String(Number(id[id.length -1]) + 1);
    return id.join('-');
}