export interface AuthLogin {
    username: string | number;
    password: string | number;
};
export interface AuthRegister {
    username: string | number;
    password: string | number;
    email: string | number;
};
export interface AuthSlice {
    login: boolean;
};