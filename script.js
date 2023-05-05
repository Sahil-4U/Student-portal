fetch(" https://pastebin.com/raw/8zhsm6AK")
.then(res=>res.json())
.then(data=>console.table(data))