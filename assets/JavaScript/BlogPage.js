// fetch(`http://localhost:3000/blogs`)
// .then(response => response.json())
// .then(data => {
//     // this part is for only fetching the title and author for showing in the home page
//     for(let i = 0; i < data.length; i++){
//         //const oldDiv =documen.getElementById('blogs');


//         const blogNew = document.getElementById("blogs");
//         // oldDiv.appendChild(blogNew)

//         blogNew.innerHTML += `<div id="Content" class="card text-black border-black m-5 p-5">
//                 <p style="display: none">${data[i].id}</p>      
//                 <h3>${data[i].title}</h3>
//                 <h6>${data[i].author}</h6>
//       <button class="btn btn-success" id="showMore" type="">Show Blog</button>
//                     </div>`;
        

//         const blogDiv = document.getElementById("showMore")
//         blogDiv.addEventListener('click', () => {
//                         blogNew.innerHTML = `<div id="Content" class="card text-black border-black m-5 p-5">
//                         <h3>${data[i].title}</h3>
//                         <p>${data[i].content}</p>
//                         <h6>${data[i].author}</h6>
//                             </div>`

//         });
  
//     }
    
//     }

// )
// .catch(error => {
//     console.error('Error:', error);
// });

fetch(`http://localhost:3000/blogs`)
.then(response => response.json())
.then(data => {
    const blogList = document.getElementById("blogs");

    data.forEach(blog => {
        const blogDiv = document.createElement("div");
        blogDiv.className = "card text-black border-black m-5 p-5";

        const title = document.createElement("h3");
        title.textContent = blog.title;
        blogDiv.appendChild(title);

        const author = document.createElement("h6");
        author.textContent = blog.author;
        blogDiv.appendChild(author);

        const showButton = document.createElement("button");
        showButton.className = "btn btn-success";
        showButton.textContent = "Show Blog";

        showButton.addEventListener('click', () => {
            // Fetch and display the full blog content here
            fetch(`http://localhost:3000/blogs/${blog.id}`)
                .then(response => response.json())
                .then(fullBlog => {
                    blogDiv.innerHTML = `
                        <h3>${fullBlog.title}</h3>
                        <p>${fullBlog.content}</p>
                        <h6>${fullBlog.author}</h6>
                    `;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });

        blogDiv.appendChild(showButton);
        blogList.appendChild(blogDiv);
    });
})
.catch(error => {
    console.error('Error:', error);
});

