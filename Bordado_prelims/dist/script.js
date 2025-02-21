document.getElementById("getDog").addEventListener("click", async () => {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        document.getElementById("dogImage").src = data.message;
    } catch (error) {
        console.log("Error fetching dog image:", error);
    }
});