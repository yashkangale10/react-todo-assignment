export default function FilterButtons({ activeFilter, setActiveFilter }) {
	const filters = ['All', 'Done', 'Todo'];

	return (
		<div className="filter-container">
			{filters.map((filter) => (
				<button
					key={filter}
					onClick={() => setActiveFilter(filter.toUpperCase())}
					className="filter-btn"
					style={{ opacity: activeFilter === filter.toUpperCase() ? 0.6 : 1 }}
				>
					{filter}
				</button>
			))}
		</div>
	);
}