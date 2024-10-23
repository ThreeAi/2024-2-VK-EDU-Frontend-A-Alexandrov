import React, {useContext} from "react";
import "./ChatHeader.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PageContext } from "../../utils/PageContext";
import avatar from "../../assets/img/avatar.jpg";

const ChatHeader = () => {

	const { switchPage } = useContext(PageContext);

	return (
		<div className="chat-header">
			<div className="chat-header-content">
				<ArrowBackIosIcon
					onClick={switchPage}
					style={{ marginRight: "15px" }}
					className="material-symbols-outlined"
				/>
				<img alt="Avatar" className="avatar" src={avatar} />
				<div className="chat-user-info">
					<h3 className="user-name">ThreeAi</h3>
					<p className="last-seen">была 2 часа назад</p>
				</div>
				<SearchIcon className="material-symbols-outlined" />
				<MoreVertIcon className="material-symbols-outlined" />
			</div>
		</div>
	);
};

export default ChatHeader;
