"use client";

import {Input} from "@nextui-org/react";
import {SearchIcon} from "@/app/components/ui/SearchIcon";

const ProductSearch: React.FC = () => {
    return(
        <div className="flex w-full p-4">
            <Input 
                type="text" 
                label="Buscar por nombre o código" 
                placeholder="Comienza a escribir para buscar"
                startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
            />
        </div>
    );
};

export default ProductSearch;