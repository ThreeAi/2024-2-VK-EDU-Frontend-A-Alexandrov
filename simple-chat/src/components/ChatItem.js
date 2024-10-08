import "../styles/chatItem.css";

const ChatItem = ({ avatar, name, message, time, unread, read, tag }) => {
    return `
        <div class="chat-item">
            <div class="avatar-conteiner">
                <img class="avatar" src="${avatar}" alt="avatar">
            </div>
            <div class="chat-message">
                <span class="chat-name">${name}</span>
                <p>${message}</p>
            </div>
            <div class="chat-details">
                <span class="chat-time">${time}</span>
                ${unread
                ? `<span class=${tag ? "taged-unread-count" : "unread-count"}>${unread}</span>`
                : `${read
                    ? `<span class="material-symbols-outlined chat-symbol">done_all</span>`
                    : `<span class="material-symbols-outlined chat-symbol">check</span>`
                    }`
                }
            </div>
        </div>
    `;
};

export default ChatItem;
