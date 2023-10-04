async function getData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        console.log(data);
        let root = document.getElementById("root");
        data.forEach(({id,title, completed }) => {
            let div = document.createElement("div");
            div.setAttribute('id', "main")
             let titlet = document.createElement("h1");
             titlet.innerText = `Title: ${title}`;
             let idt = document.createElement("h2");
             idt.innerText = `ID: ${id}`
             let status = document.createElement("h2");
             if(completed) status.innerText = "Task completed"
             else status.innerText = "Task incomplete";
            div.append(titlet, idt, status)
             root.append(div);
        });
    } catch (error) {
        console.log(error)
    }
    
}

getData();