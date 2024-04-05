fetch("https://randomuser.me/api/?results=5").then((data)=>{
    return data.json()
}).then((objectData)=>{
    console.log(objectData.results)
    let tableData="";
    objectData.results.map((values)=>{
        tableData+=`<tr>
            <td>${values.name.first}</td>
            <td>${values.location.city}</td>
        </tr>`;
        
    });
    document.getElementById("table_body").
    innerHTML=tableData;
}).catch((err)=>{
    console.log(err)
});
//Get name.first
//Get location.city
