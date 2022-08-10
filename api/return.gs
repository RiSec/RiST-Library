function returnAPI(returnObj) {
  //本が貸し出されているかのチェック
  const lendingIDs = getSituation()
  const lendingInfo = {
    lendId: returnObj.lendId
  }
  if(!lendingInfo in lendingIDs){
    return false
  }
  //ユーザのチェック
  const books = getHistory()
  const lendingUser = {
    lendId: returnObj.lendId,
    userId: returnObj.userId
  }
  const lendings = books.filter(
    book => book.lendingId == lendingUser.lendId && book.userId == lendingUser.userId
  ) // ユーザIDと貸し出しIDが一致している書籍一覧の配列
  if(lendings.length == 0){
    return false
  }
  //パスワードが合っているか
  const users = getUsers()
  const credencials = {
    userId: returnObj.userId,
    passwordHash: returnObj.passwordHash
  }
  if(!(credencials in users)){
    return false
  }
  else{
    return true
  }
}

// 実行するのはこれ
function returnAPITest() {
  const returnObj = {
    lendId: "fwmp17wu", // 貸し出しID
    userId: "momoka",
    passwordhash: "eee", // パスワードハッシュ
    comment: "", // 口コミ
  }
  const result = returnAPI(returnObj);
  console.log(result);
}
