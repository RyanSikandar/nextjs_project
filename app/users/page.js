async function dataApi(){
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users
}

export default async function Page(){
    let users = await dataApi();
    console.log(users)
    return(
        <div>
            <h1>
                User name list
                {
                    users.map((item)=>
                    (
                        <div>
                            User Name: {item.firstName}
                        </div>
                    )
                    )
                }
            </h1>
        </div>
    )
}