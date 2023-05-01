// Get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  // Update the post
  const updatePostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const content = document
      .querySelector("#post-content")
      .value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to update a post."); 
      }
    }
  };
  
  // Delete the post
  const deletePostFormHandler = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/dashboard"); 
    } else {
      alert("Failed to delete a post.");
    }
  };
  
  // Event listeners
  const updatePostButton = document.querySelector("#update-post-button");
  
  if (updatePostButton) {
    updatePostButton.addEventListener("click", updatePostFormHandler);
  }
  
  const deletePostButton = document.querySelector("#delete-post-button");
  
  if (deletePostButton) {
    deletePostButton.addEventListener("click", console.log("hello"));
  }