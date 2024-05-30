import { useState } from 'react';
import { Row, Col, Form, Button, Alert, Container } from 'react-bootstrap';
import Logo from '../components/Header/components/Logo';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {
	const [validated, setValidated] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (event: {
		preventDefault: () => void;
		stopPropagation: () => void;
	}) => {
		event.preventDefault();
		if (!PWD_REGEX.test(form.password) || !EMAIL_REGEX.test(form.email)) {
			event.stopPropagation();
			setValidated(true);
			return;
		}

		setForm(prevForm => ({
			...prevForm,
			email: '',
			password: '',
		}));
		setSubmitted(true);
		setTimeout(() => {
			setSubmitted(false);
		}, 3000);
	};

	const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setForm(prevForm => ({
			...prevForm,
			[name]: value,
		}));
	};
	return (
		<Container>
			<Logo />
			<Form
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
				className="mt-4 mt-md-5 vh-100"
			>
				<Row className="gy-3">
					<h2 className="text-center">Log in to your account</h2>
					{/* ------ Email -------*/}
					<Form.Group
						as={Col}
						sm={{ span: 8, offset: 2 }}
						md={{ span: 6, offset: 3 }}
						xl={{ span: 4, offset: 4 }}
						controlId="email"
					>
						<Form.Label>Enter your email address:</Form.Label>
						<Form.Control
							name="email"
							value={form.email}
							required
							onChange={handelChange}
							type="email"
							placeholder="Email"
							isInvalid={
								form.email.trim() !== '' && !EMAIL_REGEX.test(form.email)
							}
							isValid={EMAIL_REGEX.test(form.email)}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a valid email address "email@example.com".
						</Form.Control.Feedback>
					</Form.Group>
					{/* --------  Password ------- */}
					<Form.Group
						as={Col}
						sm={{ span: 8, offset: 2 }}
						md={{ span: 6, offset: 3 }}
						xl={{ span: 4, offset: 4 }}
						controlId="password"
					>
						<Form.Label>Enter your password:</Form.Label>
						<Form.Control
							name="password"
							value={form.password}
							onChange={handelChange}
							required
							type="password"
							placeholder="Password"
							isInvalid={
								form.password.trim() !== '' && !PWD_REGEX.test(form.password)
							}
							isValid={PWD_REGEX.test(form.password)}
						/>
						<Form.Control.Feedback type="invalid">
							8 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a number and a
							special character.
							<br />
						</Form.Control.Feedback>
						{submitted && (
							<Alert key={'success'} variant={'success'} className="mt-3">
								Form submitted successfully!
							</Alert>
						)}
					</Form.Group>
					{/* ------ Submit Button ------ */}
					<Col
						sm={{ span: 8, offset: 2 }}
						md={{ span: 6, offset: 3 }}
						xl={{ span: 4, offset: 4 }}
					>
						<Button className="mt-3" type="submit">
							Submit form
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}
export default Login;
