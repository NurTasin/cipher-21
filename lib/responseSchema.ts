export function responseSchema<T=string>(error: boolean | string, msg: string, data: T | undefined = undefined) {
    let response:{
        error?: boolean;
        err_code?: string;
        msg?: string;
        data?: T;
    } = {};
    if(error){
        response.error = true;
        response.err_code = error as string;
    }else{
        response = {
            error: false,
        }
    }
    response.msg = msg;
    response.data = data;
    return response;
}