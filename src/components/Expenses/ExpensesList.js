import React from "react"

import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>
	}

	return (
		<ul className="expenses-list">
			{props.items.map((l) => (
				<ExpenseItem
					key={l.id}
					title={l.title}
					amount={l.amount}
					date={l.date}
				/>
			))}
		</ul>
	)
}

export default ExpensesList
