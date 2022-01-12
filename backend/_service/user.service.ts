import { User } from "../_model/user.ts";

export class UserService {
    currentUser!: User;
    db: User[] = [
        {
            id: 1,
            lastname: 'test',
            firstname: 'test',
            email: 'test@mail.com',
            cart: [],
        }
    ];

    signIn(firstname: string, lastname: string, email: string) {
        if (email.trim().length != 0 && firstname.trim().length != 0 && lastname.trim().length != 0) {
            for (let user of this.db) {
                if (user.email.toLowerCase() == email.toLowerCase()) {
                    user.cart = [];
                    this.currentUser = user;
                    return this.currentUser;
                }
            }
            const userToUpdate: User = {
                id: this.currentUser.id,
                email: email,
                firstname: firstname,
                lastname: lastname,
                cart: [],
            }
            return this.updateUser(userToUpdate);
        }
        return this.currentUser;
    }

    updateUser(userToUpdate: User) {
        this.currentUser = userToUpdate;
        for (let i = 0; i < this.db.length; i++) {
            if (this.db[i].id == userToUpdate.id) {
                this.db[i] = this.currentUser;
                return this.currentUser;
            }
        }
        console.log(this.currentUser);
        return this.currentUser;
    }

    createAnonymousUser() {
        const user: User = {
            id: this.db.length + 1,
            email: '',
            firstname: '',
            lastname: '',
            cart: [],
        }
        this.db.push(user);
        this.currentUser = user;
        return this.currentUser;
    }

    getCurrentUser() {
        if (this.currentUser) {
            return this.currentUser;
        }
        return this.createAnonymousUser();
    }
}
