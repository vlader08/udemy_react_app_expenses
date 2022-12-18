import React, { useState } from "react"

import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

function App() {
	const [items, setItems] = useState([
		{ id: 1, title: "title_a", amount: 77.5, date: new Date(2022, 5, 7) },
		{ id: 2, title: "title_b", amount: 44.5, date: new Date(2022, 4, 7) },
		{ id: 3, title: "title_c", amount: 33.5, date: new Date(2022, 3, 7) },
		{ id: 4, title: "title_d", amount: 22.5, date: new Date(2022, 2, 7) },
		{ id: 5, title: "title_e", amount: 11.5, date: new Date(2022, 1, 7) },
	])

	const onSaveHdnl = (data) => {
		setItems([data, ...items])
	}

	return (
		<div>
			<NewExpense onSave={onSaveHdnl} />
			<Expenses expenses={items} />
		</div>
	)
}

export default App
