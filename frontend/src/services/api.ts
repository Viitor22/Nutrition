import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:8085/';

type AuthResponse = {
    token: string;
    type: string;
    user: UserProfile; 
}

type UserProfile = {
    id?: string,
    nome: string,
    email: string,
    senha: string
}

type LoginRequest = {
    email: string,
    senha: string
}

type GoogleTokenDTO = {
    token: string
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation<AuthResponse, UserProfile>({
            query: (body) => ({
                url: 'auth/register',
                method: 'POST',
                body
            })
        }),

        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body
            })
        }),

        loginGoogle: builder.mutation<AuthResponse, GoogleTokenDTO>({
            query: (body) => ({
                url: 'auth/google',
                method: 'POST',
                body
            })
        }),

        getProfile: builder.query<UserProfile, void>({
            query: () => ({
                url: 'users/me',
                method: 'GET'
            })
        }),

        deleteProfile: builder.mutation<void, string>({
            query: (id) => ({ 
                url: `users/${id}`,
                method: 'DELETE',
            })
        }),

        updateProfile: builder.mutation<UserProfile, { id: string, body: Partial<UserProfile> }>({
            query: ({ id, body }) => ({ 
                url: `users/${id}`,
                method: 'PUT',
                body
            })
        }),
    })
})

export const { 
    useSignUpMutation, 
    useLoginMutation, 
    useLoginGoogleMutation, 
    useGetProfileQuery,
    useDeleteProfileMutation,
    useUpdateProfileMutation
} = api

export default api