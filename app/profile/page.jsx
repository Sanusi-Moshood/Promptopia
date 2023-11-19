'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react" 
import Profile from "@components/Profile"
import { useRouter } from "next/navigation"
 
const MyProfile = () => {
  const { data: session }  = useSession();    
    const [post, setPost] = useState([]);
    const router = useRouter()


    console.log(session);

    useEffect(() => { 
              const fetchPost  = async () => {
          const res = await fetch(`/api/users/${session?.user.id}/posts`)
          const data = await res.json()
          setPost(data)
          console.log(data);
        }

            
        if(session?.user.id) fetchPost()
    }, [session])

const handleEdit = (post) => {
router.push(`/update-prompt?id=${post._id}`)
}

const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delte this promt")

    if(hasConfirmed) {
     try {
      await fetch(`/api/prompt/${post._id.toString()}/posts`,
      {
        method: 'DELETE',

      }
      )

      const filteredPost  = post.filter(p => {
        p._id  !== post._id
      })

      setPost(filteredPosts)
     } catch (error) {
      console.log(error);
     }
    }
}



  return (
    <Profile 
    name = "My"
    desc = 'welcome to my profile'
    data= {post}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}
export default MyProfile