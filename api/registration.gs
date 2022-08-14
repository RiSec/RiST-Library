function registrationAPI(registrationObj) {
  const sheets = SpreadsheetApp.getActive()
  const sheet = sheets.getSheetByName("書籍")
  const bookNum = sheet.getLastRow()+1
//bookIdの設定
  const books = getBooks()
  let bookId = Math.random().toString(36).slice(-8); 
  while (bookId in books.map(book => `${book.bookId}`)) { 
    bookId = Math.random().toString(36).slice(-8); 
  }
  const date = new Date();
  const today = Utilities.formatDate(date, 'JST', 'yyyy/MM/dd');
//書籍登録の処理
  const registrationValues = [bookId+1, registrationObj.title, registrationObj.genre, registrationObj.image, registrationObj.publish, today];
  sheet.getRange(`A${bookNum}:F${bookNum}`).setValues([registrationValues]);
}

// 実行するのはこれ
function registrationAPITest() {
  const registrationObj = {
    title: "Python自動処理",
    genre: "セキュリティ",
    image: "",
    publish:"" 
  }
  const bookId = registrationAPI(registrationObj);
  console.log(bookId);
}