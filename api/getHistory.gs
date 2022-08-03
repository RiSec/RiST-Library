function getHistory() {
  const sheets = SpreadsheetApp.getActive()
  const sheet = sheets.getSheetByName("貸し出し履歴")
  const bookNum = sheet.getLastRow()-1
  const booksAry = sheet.getRange(`A2:E${bookNum+1}`).getValues()
  let books = []
  for(let i = 0; i < bookNum; i++){
    const book = {
      lendingId:booksAry[i][0] ,
      bookId: booksAry[i][1],
      userId: booksAry[i][2],
      lendingDay: booksAry[i][3],
      extendNum: booksAry[i][4],
    }
      books.push(book)
  }

  console.log(books)
  return books;
}
