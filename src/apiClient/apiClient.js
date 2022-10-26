import axios from "axios";

const BASE_URL = "http://localhost:3000";
const DEFAULT_PAGE_SIZE = 50;

const ApiClient = {
    getCustomersPaginated: (page) => {
        console.log(page);
        return axios.get(
            `${BASE_URL}/api/customers?pageSize=${DEFAULT_PAGE_SIZE}&page=${page}`
        );
    },
};

export default ApiClient;
