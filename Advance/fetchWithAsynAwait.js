let url = "https://api.github.com/users/abhinavsrivastava";

async function getFact() {
    try {

        let res = await fetch(url);
        let data = await res.json();
        return data
    } catch (error) {
        
        console.log("error catched ",error);   
    }
   
}
getFact()
.then((data)=>
{
    console.log(data)
})