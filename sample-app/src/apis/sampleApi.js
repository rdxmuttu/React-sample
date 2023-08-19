const baseurl = "http://localhost:8080/api/sample/add";


export const usersample = async () => {
    
    const response = await fetch(baseurl+"/getall",{
        mode: 'no-cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        
    });

    if(response.status>=200 && response.status<300){
        const data = await response.json();
        return data;
    }
}


export const addUserDetails = async (data) => {
    
    const response = await fetch(baseurl,{
       
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    console.log(response)

    if(response.status>=200 && response.status<300){
        const data = await response.json();
        console.log(data)
        return data;
    }
    
}
