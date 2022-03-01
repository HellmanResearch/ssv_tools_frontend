

import local from "./local"
import pro from "./pro"

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV)

const export_config = Object.assign({}, local,process.env.NODE_ENV === "production" ? pro : {})

console.log("export_config: ", export_config)
export default export_config