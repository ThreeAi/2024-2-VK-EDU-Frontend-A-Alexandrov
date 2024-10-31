import { useState } from "react";
import ChatLayout from "../../layouts/ChatLayout";
import ProfileHeader from "../../modules/profile/ProfileHeader";
import "./PageEditProfile.scss";
import InputField from "../../components/InputField";
import EditAvatar from "../../components/EditAvatar";

const PageEditProfile = () => {
	const [formData, setFormData] = useState({
		fullName: "Tony Jackobson",
		username: "@tony",
		bio: "Subtitle 1",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	return (
		<ChatLayout>
			<ProfileHeader />
			<div className="profile-form">
				<EditAvatar/>

				<InputField label={"Full name"} name={"fullName"} value={formData.fullName} description={undefined} onChange={handleChange}/>
				<InputField label={"Username"} name={"username"} value={formData.username} description={"Minimum Length is 5 characters"} onChange={handleChange}/>
				<InputField label={"Bio"} name={"bio"} value={formData.bio} description={"Any details about you"} onChange={handleChange}/>
			</div>
		</ChatLayout>
	);
};

export default PageEditProfile;
