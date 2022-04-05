import server from "./index";

export const login = (data) => {
    return server({
        url: `/login/cellphone?phone=${data.phone}&password=${data.password}`,
        method: 'GET',
    })
}
