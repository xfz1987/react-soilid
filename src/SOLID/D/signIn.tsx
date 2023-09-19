import { useCallback } from 'react';
import Form from './form';

const SignIn = () => {
	const handleSubmit = useCallback(async (email: string, password: string) => {
		// await axios.post('https://localhost:3000/login', {
		// 	email,
		// 	password,
		// });
	}, []);

	return <Form onSubmit={handleSubmit} />;
};

export default SignIn;
