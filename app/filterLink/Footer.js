import React from 'react'
import FilterLink from './FilterLink'

const Footer = () => (
	<footer className="footer">
		<p className="filters">
			<FilterLink filter="SHOW_ALL">
				All
			</FilterLink>
			{" "}
			<FilterLink filter="SHOW_ACTIVE">
				Active
			</FilterLink>
			{" "}
			<FilterLink filter="SHOW_COMPLETED">
				Completed
			</FilterLink>
		</p>
	</footer>
)

export default Footer
