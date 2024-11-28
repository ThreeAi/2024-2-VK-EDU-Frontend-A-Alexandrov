export enum AppRoute {
    Chats = '/',
    Login = '/login',
    Chat = '/chat/:chatId',
    EditProfile = '/profile/edit',
}

export enum AuthorizationStatus {
    Unknown = 'UNKNOWN',
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
}

export enum NameSpace{
    Chat = 'CHAT_DATA',
    Chats = 'CHATS_DATA',
    User = 'USER',
}