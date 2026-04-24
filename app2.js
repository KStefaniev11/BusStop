async function getInfo() {
    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";
    const inputRef = document.getElementById('stopId');
    const stopNameRef = document.getElementById("stopName");
    const busesListRef = document.getElementById("buses");

    const input = inputRef.value.trim();
    inputRef.value = "";
    busesListRef.innerHTML = "";


    try {
        const response = await fetch(BASE_URL + input);
        const data = await response.json();

        stopNameRef.textContent = data.name;
        Object.entries(data.buses).forEach(([busId, time]) => {
        const li = document.createElement("li");
        li.textContent = `Bus ${busId} arrives in ${time} minutes`;
        busesListRef.appendChild(li);
        })
        
    } catch (error) {
        stopNameRef.textContent = "Error";
    }
    console.log("function finish");
    
}