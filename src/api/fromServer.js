
async function getEntries() {

    const URL = 'http://localhost:3001/';
    const response = fetch(URL, {
        method : 'GET',
        headers : {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).catch(err => console.log(err));
    
    return response; 
}

export default getEntries;