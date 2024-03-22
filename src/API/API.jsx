import axios from "axios";

export default class API {
    static async getUsers() {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
        return responce
    }
}