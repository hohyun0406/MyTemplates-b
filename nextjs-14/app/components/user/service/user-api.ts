import { instance } from "@/app/components/common/configs/axios-config"

export const findAllUsersAPI = async (page : number) => {
    try{
        const response = await instance.get('/users/list', {
            params : {page, limit :10}
        })
        return response.data
    } catch (error){
        console.log('api communicate error - axios')
        return error
    }
}



export const findUserByIdAPI = async (id : number) => {
    try{
        const response = await instance.get('/users/detail', {
            params : {id}
        })
        return response.data
    }catch(error){
        console.log('에-러')
        return error
    }
}