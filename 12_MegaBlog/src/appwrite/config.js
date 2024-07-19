
/* eslint-disable no-dupe-class-members */


import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client;
    databases;
    buket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjrctId);
        this.databases = new Databases(this.client);
        this.buket = new Storage(this.client);
    }

    // create post
    async createPost({title, slug, content, featuredImage, status, useId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    useId
                }
            )
        } catch (error) {
            console.log("Appwrite config :: createPost :: error",error);
        }
    }

    // update Post
    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite config :: updatePost :: error",error);
        }
    }

    // delete Post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite config :: deletePost :: error",error);
            return false;
        }
    }

    // get Post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite config :: getPost :: error",error)
            return false;
        }
    }

    // get active Post
    async getPosts(queries = [Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
                // [
                //     Query.equal("status","active")
                // ]
            )
        } catch (error) {
            console.log("Appwrite config :: getPost :: error",error);
            return false;
        }
    }

    // file upload service

    async uploadFile(file) {
        try {
            await this.buket.createFile(
                conf.appwriteBuketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite config :: uploadFile :: error", error);
            return false;
        }
    }

    // file delete service
    async deleteFile(fileId) {
        try {
            await this.buket.deleteFile(
                conf.appwriteBuketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite config :: deleteFile :: error",error);
            return false;
        }
    }

    // get file preiview

    getFilePreview(fileId) {
        return this.buket.getFilePreview(
            conf.appwriteBuketId,
            fileId
        )
    }
}

const service = new Service()

export default service