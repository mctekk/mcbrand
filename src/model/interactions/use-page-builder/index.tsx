import React, { ReactNode } from "react";


function createPageHome(page_sections: Record<string, ReactNode> ): ReactNode {
 const type = process.env.PAGE_TYPE || "";
 return page_sections[type] || (<></>);
}

export function usePageBuilder() {
 function generatePage(page_sections: Record<string, ReactNode> ): ReactNode {
    return createPageHome(page_sections);
 }

 return {
    generatePage,
 };
}


