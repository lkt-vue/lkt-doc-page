let pageNumber = 0;

export const getPageNumber = () => {
    ++pageNumber;
    return pageNumber;
}