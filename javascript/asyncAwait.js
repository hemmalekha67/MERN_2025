async function asAw(){
    setTimeout(()=>{
        return("Inside Timeout");
    },5000)
    //return "this is async example"
}
asAw().then(function(output){
    console.log(output);
})

likeCode=async()=>{
    return new Promise((likingPost)=>{
        setTimeout(()=>{
        likingPost("Liked the post created")
       },2000)
    })
}
commentCode=async()=>{
    return new Promise((commentingPost)=>{
        setTimeout(()=>{
        commentingPost("Comment posted to the post created")
       },5000);
    });
}

async function createPost(){
    var post=new Promise((cPost)=>{
        setTimeout(()=>{
            cPost("Post created successfully")

    },1000);

   });
   
   var[post,like,comment]=await Promise.all([post,likeCode(),commentCode()])
   console.log(await post);
   console.log(await likeCode());
   console.log(await commentCode());
}
createPost()