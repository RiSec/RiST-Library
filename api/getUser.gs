function getUsers() {
  const sheets = SpreadsheetApp.getActive()
  const sheet = sheets.getSheetByName("ユーザ")
  const userNum = sheet.getLastRow()-1
  const usersAry = sheet.getRange(`A2:B${userNum+1}`).getValues()
  let users = []
  for(let i = 0; i < userNum; i++){
    const user = {
      userId:usersAry[i][0] ,
      passwordHash: usersAry[i][1],
     
    }
    users.push(user)
  }

  console.log(users)
  return users;
}