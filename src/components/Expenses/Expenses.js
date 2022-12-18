import React, { useState } from "react"

import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {
	const [filter, setFilter] = useState("2020")

	const onFilterHndl = (e) => {
		let value = e.target.value
		setFilter(value)
	}

	const items = props.expenses.filter((f) => f.date.getFullYear() == filter)

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filter} onChange={onFilterHndl} />
			<ExpensesChart expenses={items}/>
			<ExpensesList items={items} />
		</Card>
	)
}

export default Expenses
