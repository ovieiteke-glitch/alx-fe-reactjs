import React from "react";
import DataFetcher from "../App";

function Homepage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <header>
                <h1>Welcome to my page!</h1>
            </header>
            <body>
                <p>Hi I am Ovie and this is my page.</p>
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <DataFetcher />
                </div>
                
            </body>
            <footer>
                <p>&copy Oveewrites</p>
            </footer>
        </div>
    )
}


export default Homepage;