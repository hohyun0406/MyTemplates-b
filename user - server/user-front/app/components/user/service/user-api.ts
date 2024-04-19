import { instance } from "@/app/components/common/configs/axios-config"
import { IUser } from "../model/user"

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

export const modifyAPI = async (user:IUser) => {
    try{const response = await instance.post('/users/modify', user)
        return response.data.message
    }catch(error){
        return error
    }
}

export const deleteByIdAPI = async (id : number) => {
    try{const response = await instance.get('/users/delete', {params : {id}})
        return response.data.message
    }
     catch (error) {
        return error
    }
}

export const loginAPI = async (user:IUser) => {
    try {const response = await instance.post('/users/login', user)
        return response.data
    } catch (error) {
        return error
    }
}

export const existsIdAPI = async (username:string) => {
    try {const response = await instance.get('/users/exists-id', {params : {username}})
        return response.data.message
    } catch (error) {
        return error
    }
}