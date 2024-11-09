export function isJson(str: string) {
  if (typeof str =="string") {
    try {
      JSON.parse(str)
      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }
}