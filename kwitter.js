function login(){
    name1 = document.getElementById("user_name").value;
    localStorage.setItem("digi_fairies",name1)
    window.location = "kwitter_room.html";
}