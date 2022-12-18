import "./NewExpense.css"
import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"

function NewExpense(props) {
	const [stage, setStage] = useState(0)

	const saveExpenseDataHndl = (enteredData) => {
		props.onSave(enteredData)
		setStage(0)
	}
	const showFormHndl = (e) => {
		setStage(1)
	}
	const onCancelAddHndl = (e) => {
		setStage(0)
	}

	if (stage === 0) {
		return (
			<div className="new-expense">
				<button onClick={showFormHndl}>Add Expense</button>
			</div>
		)
	}

	if (stage === 1) {
		return (
			<div className="new-expense">
				<ExpenseForm
					onCancelHndl={onCancelAddHndl}
					onSaveExpenseData={saveExpenseDataHndl}
				/>
			</div>
		)
	}
}

export default NewExpense
