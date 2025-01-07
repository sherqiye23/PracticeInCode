import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const SuppliersApi = createApi({
    reducerPath: "suppliersApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://northwind.vercel.app/api/` }),
    endpoints: (builder) => ({
        getSuppliers: builder.query({
            query: () => `suppliers`,
        }),
        postSupplier: builder.mutation({
            query: (newSupplier) => ({
                url: "/suppliers",
                method: "POST",
                body: newSupplier,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }),
        deleteSupplier: builder.mutation({
            query: (id) => ({
                method: "DELETE",
                url: `suppliers/${id}`,
            })
        }),
        updateSupplier: builder.mutation({
            query: (id, updateSupplier) => ({
                method: "PATCH",
                body: updateSupplier,
                url: `suppliers/${id}`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
        })
    }),
})


export const {useUpdateSupplierMutation, useGetSuppliersQuery, usePostSupplierMutation, useDeleteSupplierMutation } = SuppliersApi
