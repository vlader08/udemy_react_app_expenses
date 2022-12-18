import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = p => {

    let values = p.dataPoints.map(p => p.value)
    const max = Math.max(...values)

	return (
		<div className="chart">
			{p.dataPoints.map((l) => (
				<ChartBar
					key={l.label}
					value={l.value}
					label={l.label}
					maxValue={max}
				/>
			))}
		</div>
	)
}

export default Chart
