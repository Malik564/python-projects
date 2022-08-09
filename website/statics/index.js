function deleteNote(noteId){
    fetch('/delte-note' , {
        method: 'POST',
        body:JSON.stringify({noteId:noteId})
    }).then((_res)=>{
        window.location.href='/';
    })
}