import React from "react";
import {useDispatch} from "react-redux";
import {setCategory} from "../redux/reducers/filtersReducer";
type CategoriesType ={
    items: Array<string>
    category: number | null
}
export const Categories: React.FC<CategoriesType> = ({category,items}) => {
    const dispatch = useDispatch()

    const onSelectItem = (index: number | null) => {

        dispatch(setCategory(index))
    }
    return <div className="categories">
        <ul>
            <li className={category === null ? 'active' : ''}
                onClick={() => onSelectItem(null )}
            >
                Все
            </li>
            {items &&
            items.map((name,index) => <li
                className={category === index ? 'active' : ''}
                onClick={() => onSelectItem(index  )}
                key={`${name}_${index}`}>
                {name}
            </li>)}

        </ul>
    </div>
}