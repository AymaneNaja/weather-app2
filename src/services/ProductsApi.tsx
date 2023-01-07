import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const ProductApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
    reducerPath: 'ProductApi',
    tagTypes: ['token'],
    endpoints: (builder) => ({
        // categories
        getallCategories: builder.query({
            query: () => '/categories'
        }),
        getSingleCategories: builder.query<string, number>({
            query: (id) => `/categories/${id}`
        }),
        getProductsByCategory: builder.query<string, number>({
            query: (id) => `/categories/${id}/products`
        }),
        getAllProducts: builder.query({
            query: () => `/products`
        }),
        getSingleProducts: builder.query<string, number>({
            query: (id) => `/products/${id}`
        }),
        getProductsbyPagnation: builder.query({
            query: ({ offset, limit }) => `/products?offset=${offset}&limit=${limit}`
        }),
        GetSignup: builder.mutation<any, any>({
            query: ({ email, password, name }) => ({
                url: '/users/',
                method: 'post',
                body: { email, password, name, "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867" }
            }), invalidatesTags: ['token']
        })

    })
})


export const {
    useGetAllProductsQuery,
    useGetProductsByCategoryQuery,
    useGetProductsbyPagnationQuery,
    useGetSingleCategoriesQuery,
    useGetSingleProductsQuery,
    useGetallCategoriesQuery,
    useGetSignupMutation,
} = ProductApi

export default ProductApi