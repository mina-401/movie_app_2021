import { linkSync } from "fs";
import React from "react";
import {Link} from "react-router-dom"
function Navigation(){
    return
        <div>
<<<<<<< Updated upstream
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
=======
            <Link href="/">Home</a>
            <linkSync href="/about">About</a>
>>>>>>> Stashed changes
        </div>
}
export default Navigation