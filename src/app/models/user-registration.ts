export interface UserRegistration {
    username: string,
    password: string,
    repeatedPassword: string,
    email?: string,
    shortBio?: string,
    profilePicture?: File
}