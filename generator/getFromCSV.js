export const getFromCSV = (csv) => {
  const dataArray = []
  csv.split('\n').forEach(content => {
      const data = content.split(',')
      if (!data[3] == '') {
          dataArray.push({
              Date: data[0]+'/'+data[1],
              Type: [
                  data[2],
                  data[4]    
              ],
              Location: [
                  data[3],
                  data[5]
              ],
              Balance: data[6],
              Amount: data[7]
          })
      }
      else if (data[3] === '') {
          dataArray.push({
              Date: data[0]+'/'+data[1],
              Type: [
                  data[2] 
              ],
              Location: [
                  data[4],
                  data[5]
              ],
              Balance: data[6],
              Amount: data[7]
          })
      }
  })
  return dataArray
}
