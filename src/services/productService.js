
import api from "./api";

export const getProducts = async (
    page = 1,
    limit = 10,
    search = "",
    category = ""
) => {

    const response = await api.get("/products", {

        params: {

            page,
            limit,
            search,
            category

        }

    });

    return response.data;

};

export const createProduct = async (product) => {

    const response = await api.post("/products", product);

    return response.data;

};

export const updateProduct = async (id, product) => {

    const response = await api.put(`/products/${id}`, product);

    return response.data;

};

export const deleteProduct = async (id) => {

    const response = await api.delete(`/products/${id}`);

    return response.data;

};
