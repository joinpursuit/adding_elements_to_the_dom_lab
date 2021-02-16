

userListObj.forEach(user=>{
  let li= document.createElement("li")

  let first = user["name"]['first']
  let last = user["name"]["last"]
  let nat = user["nat"]
  
  li.textContent = `${first} ${last} (${nat})`

  document.querySelector("#user-list").appendChild(li) 
})
