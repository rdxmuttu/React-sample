const baseurl = "http://localhost:8080/api/sample";


export const usersample = async () => {
    
    const response = await fetch(baseurl+"/getall",{
        //mode: 'no-cors',
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
            console.log(data);
            const response = await fetch(baseurl+"/add", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
          
            if (response.status >= 200 && response.status < 300) {
              const responseData = await response.json();
              return responseData;
            } else {
              throw new Error(`Failed to add user: ${response.status}`);
            }
          };
          
