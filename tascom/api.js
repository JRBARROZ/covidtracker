const API_URL = "summary.json"
export function GET_SUMMARY(){
    return {
        url: API_URL,
        options:{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }
    }
}