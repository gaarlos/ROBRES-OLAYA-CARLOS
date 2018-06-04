export const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
export const GET_ALL_BOOKS_SUCCESS = 'GET_ALL_BOOKS_SUCCESS'
export const GET_USER_BOOKMARKS = 'GET_USER_BOOKMARKS'
export const GET_USER_BOOKMARKS_SUCCESS = 'GET_USER_BOOKMARKS_SUCCESS'
export const GET_BOOK_DETAILS = 'GET_BOOK_DETAILS'
export const GET_BOOK_DETAILS_SUCCESS = 'GET_BOOK_DETAILS_SUCCESS'

export const getAllBooks = () => ({
  type: GET_ALL_BOOKS
})

export const getAllBooksSuccess = payload => ({
  type: GET_ALL_BOOKS_SUCCESS,
  payload
})

export const getUserBookmarks = payload => ({
  type: GET_USER_BOOKMARKS,
  payload
})

export const getUserBookmarksSuccess = payload => ({
  type: GET_USER_BOOKMARKS_SUCCESS,
  payload
})

export const getBookDetails = payload => ({
  type: GET_BOOK_DETAILS,
  payload
})

export const getBookDetailsSuccess = payload => ({
  type: GET_BOOK_DETAILS_SUCCESS,
  payload
})