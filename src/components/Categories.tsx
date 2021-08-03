import * as React from 'react'

type PropTypes = {
    activeCategory: null | number,
    onClickItem: (index: number | null) => void
}

export const Categories: React.FC<PropTypes> = React.memo(function Categories({onClickItem, activeCategory}) {
    const categoryNames: Array<string> = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

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
