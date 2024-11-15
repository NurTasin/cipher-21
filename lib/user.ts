export interface IUser {
    id: string;
    email: string;
    name: string;
    student_id: string;
    phone?: string;
    profile_pic?: string;
    role: string;
}

class User {
    set(user: IUser) {
        localStorage.setItem("user", JSON.stringify(user));
    }
    get() {
        const user = localStorage.getItem("user");
        if (!user) return null;
        return JSON.parse(user);
    }
    clear() {
        localStorage.removeItem("user");
    }
}

export default new User();