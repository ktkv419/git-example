const URL = require("CONSTANTS.js")

const fetchData = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data)
}

fetchData()
