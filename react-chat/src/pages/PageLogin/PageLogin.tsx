import { useState } from "react";
import ChatLayout from "../../layouts/ChatLayout";
import "./PageLogin.scss";
import RegistrationForm from "../../modules/login/RegistrationForm";
import LoginForm from "../../modules/login/LoginForm";

const PageLogin = () => {
	const [isEnter, setIsEnter] = useState<boolean>(true);

	const changeForm = () => setIsEnter(!isEnter);

	return (
		<ChatLayout>
			<div className="form-container">
				<h1>Messanger</h1>
				{isEnter ? (
					<LoginForm onChange={changeForm} />
				) : (
					<RegistrationForm onChange={changeForm}/>
				)}
			</div>
		</ChatLayout>
	);
};

export default PageLogin;
