import { User } from "../_model/user.ts";

export class UserService {
    currentUser!: User;
    db: User[] = [
        {
            id: 1,
            email: 'test@mail.com',
            cart: [],
        }
    ];

    signIn(email: string) {
        for (let user of this.db) {
            if (user.email.toLowerCase() == email.toLowerCase()) {
                this.currentUser = user;
                return this.currentUser;
            }
        }
        this.currentUser = {
            id: this.db.length + 1,
            email: email,
            cart: [],
        }
        return this.currentUser;
    }

    updateUser(userToUpdate: User) {
        this.currentUser = userToUpdate;
        for (let i = 0; i < this.db.length; i++) {
            if (this.db[i].email.toLowerCase() == userToUpdate.email.toLowerCase()) {
                this.currentUser = this.db[i];
                return this.currentUser;
            }
        }
        return this.currentUser;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}
