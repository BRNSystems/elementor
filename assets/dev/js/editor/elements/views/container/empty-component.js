export default function EmptyComponent() {
	return (
		<div className="elementor-first-add">
			<div className="elementor-icon eicon-plus" onClick={() => $e.route( 'panel/elements/categories' )} />
		</div>
	);
}
