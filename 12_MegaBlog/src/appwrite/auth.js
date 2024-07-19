/* eslint-disable no-useless-catch */

import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjrctId);

        this.account = new Account(this.Client);
    }

    // for account createion 
    async createAccount({email, password, name}) {
        try {
            const userAccount =  await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call anothor method
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // for login
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            return error;
        }
    }

    // for get current user login
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    // for logout
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(" Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService