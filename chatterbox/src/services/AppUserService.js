import axios from 'axios';

const springBootAppUrl = `http://localhost:8080`;

const registerService = (appUser) => {
    console.log(appUser);
    return axios.post(`${springBootAppUrl}/signup`, appUser);
}

const loginService = async (appUser) => {
    console.log(appUser);
    let options = {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(appUser)
    }
    let res = await fetch(`${springBootAppUrl}/loginuser`,options);
    console.log(res);
    let data = await res.json();
    console.log(data);
}

export { registerService, loginService };