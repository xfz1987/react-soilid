import { FC, FormEvent, useState } from 'react';

interface IFormProps {
	onSubmit: (email: string, password: string) => void;
}

const Form: FC<IFormProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// const handleSubmit = async (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	// await axios.post('https://localhost:3000/login', {
	// 	// 	email,
	// 	// 	password,
	// 	// });
	// };

	return (
		<form onSubmit={(e: FormEvent) => onSubmit(email, password)}>
			<div>
				<label htmlFor="email">Your email</label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					id="email"
					placeholder="name@company.com"
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					id="password"
					placeholder="••••••••"
				/>
			</div>
			<button type="submit">Sign in</button>
		</form>
	);
};

export default Form;
