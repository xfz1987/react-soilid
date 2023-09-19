import { ButtonHTMLAttributes, FC } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	// role?: 'back' | 'forward';
	icon?: string;
}

// const backIcon = '<--';
// const forwardIcon = '-->';

const Button: FC<IButtonProps> = ({ text, role, icon }) => (
	<button>
		{text}
		<span>
			{/* {role === 'back' && backIcon}
			{role === 'forward' && forwardIcon} */}
			{icon}
		</span>
	</button>
);

export default Button;
