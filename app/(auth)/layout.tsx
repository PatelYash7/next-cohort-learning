import React from "react";

export default function ({children}:{children:React.ReactNode}){
    return <div>
        <div className="bg-red-200 flex justify-center">
            This is Top Bar for Both signup and signin page
        </div>
        {children}
    </div>
}