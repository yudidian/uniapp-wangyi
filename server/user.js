import server from "./index";

export const getUserDetail = (data) => {
    return server({
        url: `/user/subcount`,
        method: 'POST',
        data
    })
}
