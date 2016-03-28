export function selectBook(book) {
    //selectBook  is an actioncreator so it needs to return adn action
    //an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
