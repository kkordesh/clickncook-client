export const EndPoints = {
    user: {
        register: "/user/register",
        login: "/user/login",
    },
    recipe: {
        create:"/recipe/",
        getAllRecipes:"/recipe/",
        getUserRecipes:"/:owner_id"
    },
};

export const APIURL = "http://localhost:4000"