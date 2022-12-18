import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = props => {
	const [title, setTitle] = useState("")
	const [amount, setAmount] = useState("")
	const [date, setDate] = useState("")

	const submitHndl = event => {
		event.preventDefault()

		const expenseData = {
			id: Math.random().toString(),
			title: title,
			amount: +amount,
			date: new Date(date),
		}

		setTitle("")
		setAmount("")
		setDate("")

		props.onSaveExpenseData(expenseData)
	}

	const titleHandler = e => {
		setTitle(e.target.value)
	}
	const amountHandler = e => {
		setAmount(e.target.value)
	}
	const dateHandler = e => {
		setDate(e.target.value)
	}

	return (
		<form onSubmit={submitHndl}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={title} onChange={titleHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						onChange={amountHandler}
						value={amount}
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						onChange={dateHandler}
						value={date}
						min="2019-01-01"
						max="2022-12-31"
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={props.onCancelHndl}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
