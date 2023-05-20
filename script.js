document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click')
    handleFormV();
});
let blogContent = document.querySelector('#blogContent');
let post = document.querySelector('#post');
let handleFormV = () => {
    if(blogContent.value === ''){
        console.log('Error')
        return alert('comment first before submiting form')
    }else{
        console.log('success')
        handleComments()
    }
}

let commentObj = {}
let handleComments = () => {
    commentObj['text'] = blogContent.value;
    handleDisplay();
}
let handleDisplay = () => {
    post.innerHTML += `
    <div class="row">
    <h5>${commentObj.text}</h5>
    <span class="options">
        <i onClick='handleEdit(this)' class="fas fa-t-edit">edit</i>
        <i onClick='handleDelete(this)' class="fas fa-trash-alt">trash</i>
    </span>
</div>
    `;
    blogContent.value = '';
}

let handleDelete = (e) => {
    e.parentElement.parentElement.remove();
}

let handleEdit = (e) => {
    blogContent.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}
