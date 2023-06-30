import BlogCard from '@/components/blogCard/BlogCard'
import classes from './page.module.css'
import Design from '@/components/design/Design'

export async function fetchBlogs(){

  try {
    const res = await fetch('https://project-idea-xywm.vercel.app/api/blog', {cache: 'no-store'})
    return res.json()
    // Process the response
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  }
  

  
}


export default async function Home() {
  const blogs = await fetchBlogs()

  return (
   <div className={classes.container}>

    <Design/>
    <div className={classes.boader}>
    {blogs?.length > 0 && <h2>Want to be a part of Project?</h2>}
    </div>
     <div className={classes.wrapper}>
      {blogs?.length > 0 
       ? blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog}/>
      )) : <h3 className={classes.noBlogs}>No blogs are currently in the Page</h3>}
     </div>
   </div>
  )
}