function lendingAPI(lendingObj) {
  // ここにIDとPWでユーザ認証
  const sheets = SpreadsheetApp.getActive()
  const users = getUsers()
  const credencials = {
    userId: lendingObj.userId,
    passwordHash: lendingObj.passwordHash
  }
  if(credencials in users){
    return ""
  }
  
  // lendingIdが使用されていないかチェック
  const books = getHistory()
  let lendingId = Math.random().toString(36).slice(-8); // ランダムな文字列
  while (lendingId in books.map(book => `${book.lendingId}`)) { // ["1", "12345678"]
    lendingId = Math.random().toString(36).slice(-8); // ランダムな文字列
  }

  // ここに貸し出し処理(借り出し履歴に貸し出しID, 書籍ID, ユーザID, 貸し出し日を追加)
  const sheet = sheets.getSheetByName("貸し出し履歴")
  const lendingNum = sheet.getLastRow()+1
  const values = [lendingId, lendingObj.bookId, lendingObj.userId, (new Date()).toString(), "0"];
  sheet.getRange(`A${lendingNum}:E${lendingNum}`).setValues([values]);
	
	return lendingId;
}

// 実行するのはこれ
function lendingAPITest() {
  const lendingObj = {
    passwordHash: "eee",
	  userId: "momoka",
    bookId: "2" // ハッカーの技術書
  };
  const lendingId = lendingAPI(lendingObj);
  console.log(lendingId);
}