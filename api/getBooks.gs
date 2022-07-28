function getBooks() {
  const sheets = SpreadsheetApp.getActive()
  const sheet = sheets.getSheetByName("書籍")
  const bookNum = sheet.getLastRow()-1
  const booksAry = sheet.getRange(`A2:F${bookNum+1}`).getValues()
  let books = []
  for(let i = 0; i < bookNum; i++){
    const book = {
      bookId:booksAry[i][0] ,
      title: booksAry[i][1],
      genre: booksAry[i][2],
      image: booksAry[i][3],
      publish: booksAry[i][4],
      registration:booksAry[i][5]
    }
    books.push(book)
  }

  console.log(books)
}
