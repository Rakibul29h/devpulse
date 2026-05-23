import app from "./app";
import config from "./config";
import { initDB } from "./database";

const main=()=>{
    
    initDB();
    app.listen(config.port,()=>{
        console.log(`Server is running on port ${config.port}`)
    })
}

main();