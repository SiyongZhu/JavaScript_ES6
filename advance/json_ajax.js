var xmlHttp = new XMLHttpRequest()

xmlHttp.open("GET", "users.json", true)

xmlHttp.onload = function() {
    if(this.status === 200) {
        var myData = JSON.parse(this.responseText)
        console.log(myData)
    }
}

xmlHttp.send()