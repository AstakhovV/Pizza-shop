import * as React from 'react'

const categoryNames: Array<string> = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

type PropTypes = {
    activeCategory: null | number,
    onClickItem: (index: number | null) => void
}

export const Categories: React.FC<PropTypes> = React.memo(function Categories({onClickItem, activeCategory}) {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickItem(null)}>Все
                </li>
                {categoryNames &&
                categoryNames.map((item, index) => (
                    <li className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickItem(index)}
                        key={`${item}_${index}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
})
