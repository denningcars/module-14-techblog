const commentForm = document.querySelector(".comment-form");
console.log(commentForm)
commentForm.addEventListener("submit",e=>{
    e.preventDefault();
    const commentObj = {
        body:document.querySelector('.comment-input').value,
        post_id:parseInt(document.querySelector("#post-id").value),
        user_id:parseInt(document.querySelector(".user_id").textContent)
    }
    console.log(commentObj)
    fetch("/api/comments",{
        method:"POST",
        body:JSON.stringify(commentObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = `/posts/${parseInt(document.querySelector("#post-id").value)}/comments`
        } else {
            alert("trumpet sound")
        }
    })
})

const deleteBtn = document.querySelector(".delete-comment");
    deleteBtn.addEventListener("click",()=>{
        const idToDel = deleteBtn.getAttribute("data-post-id");
        fetch(`/api/comments/${idToDel}`,{
            method:"DELETE",
        }).then(res=>{
            if(res.ok){
                location.reload()
            } else {
                alert("error")
            }
        })
    })