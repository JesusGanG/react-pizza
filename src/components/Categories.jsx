import React from "react"

export default function Categories() {
	const [activeCategory, setActiveCategory] = React.useState(0);

	const categories = ['Все','Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые' ]

  return (
    <div className='categories'>
			<ul>
				{categories.map((value, i) => (<li key={value} onClick={() => setActiveCategory(i)} className={activeCategory === i ? 'active' : ''}>{ value}</li>))}
			</ul>
    </div>
  )
}