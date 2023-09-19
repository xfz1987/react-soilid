import Button from './button';

const backIcon = '<--';
const forwardIcon = '-->';

export default function O() {
	return (
		<>
			<Button
				text="Previous"
				// role="back"
				icon={backIcon}
			/>
			<Button
				text="Next"
				// role="forward"
				icon={forwardIcon}
			/>
		</>
	);
}
