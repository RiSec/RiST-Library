function getComments() {
  const sheets = SpreadsheetApp.getActive()
  const sheet = sheets.getSheetByName("口コミ")
  const comNum = sheet.getLastRow()-1
  const commentsAry = sheet.getRange(`A2:B${comNum+1}`).getValues()
  let comments = []
  for(let i = 0; i < comNum; i++){
    const comment = {
      lenndingID:commentsAry[i][0] ,
      comText: commentsAry[i][1],
    }
    comments.push(comment)
  }

  console.log(comments)
}