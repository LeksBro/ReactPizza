import React, {MouseEvent, useState} from "react";
type CategoriesType ={
    items: Array<string>
}
export const Categories: React.FC<CategoriesType> = ({items}) => {
    const [activeItem, setActiveItem] = useState<number>(0)
    const onSelectItem = (index: number) => {
        setActiveItem(index)
    }
    return <div className="categories">
        <ul>

            {items &&
            items.map((name,index) => <li
                className={activeItem == index ? 'active' : ''}
                onClick={() => onSelectItem(index  )}
                key={`${name}_${index}`}>
                {name}
            </li>)}

        </ul>
    </div>
}