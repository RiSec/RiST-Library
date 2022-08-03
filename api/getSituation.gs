function getSituation() {
  const sheets = SpreadsheetApp.getActive()
  const sheet = sheets.getSheetByName("貸し出し状況")
  const sitNum = sheet.getLastRow()-1
  const lendingIDsAry = sheet.getRange(`A2:A${sitNum+1}`).getValues()
  let lendingIDs = []
  for(let i = 0; i < sitNum; i++){
    lendingIDs.push(lendingIDsAry[i][0])
  }
  console.log(sitNum)
  console.log(lendingIDs)
  return lendingIDs;
}