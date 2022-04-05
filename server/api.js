import server from "./index";

export const getBanner = () => {
    return server({
        url: '/banner?type=1',
        method: 'GET'
    })
}
export const getDragon = () => {
    return server({
        url: '/homepage/dragon/ball'
    })
}
export const getPersonalized = () => {
    return server({
        url: '/personalized?limit=6'
    })
}
export const getSongs = (data) => {
    return server({
        url: '/recommend/songs',
        method: 'POST',
        data
    })
}
export const getSongsDetail = (id) => {
    return server({
        url: `/song/detail?ids=${id}`,
        method: 'get'
    })
}
export const getSongsPlay = (id) => {
    return server({
        url: `/song/url?id=${id}`,
        method: 'get'
    })
}

export const homepage = () => {
    return server({
        url: `/homepage/block/page`,
        method: 'get'
    })
}


