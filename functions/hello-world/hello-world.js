// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  console.log("Starting user authentication")
  if (Math.random() > 0.66) {
      // internal server error
      throw new Error("Critical error accessing user")
      //  return { statusCode: 500, body: error.toString() }
    }
    if (Math.random() > 0.5) {
      console.error("Unauthorized request for user")
      return {
        statusCode: 403,
        body: JSON.stringify({ error: true, name: 'Null' }),
        headers: {'Content-Type': 'application/json'},
      }
    } else {
      console.log("Successfully located user")
      return {
        statusCode: 200,
        body: JSON.stringify({ err: false, name: 'John Doe' }),
        headers: {'Content-Type': 'application/json'},
      }
    }
}

module.exports = { handler }
