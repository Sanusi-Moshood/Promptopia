'use client'
import PromptCard from "./PromptCard"
import { useState, useEffect } from "react"

const PromptCardList = ({data, handleTagClick}) => { 
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((post) => (
          <PromptCard 
          key={post._id}
          post={post} 
          handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
  )
}


const Feed = () => {  
  const [searchText, setSearchText] = useState('')
  const [post, setPost] = useState([])

  const handleSearchChange = (e) => {
    e.preventDefault()
  }


  useEffect(() => {
    const fetchPost  = async () => {
      const res = await fetch('/api/prompt')
      const data = await res.json()
      setPost(data)
    }

    fetchPost()
 
  }, [])
  

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input type="text" value={searchText} 
        onChange={handleSearchChange}
        required
        className="search_input peer"
        name="" id="" placeholder="Search for a username or tag " />
      </form>

      <PromptCardList 
      data={post}
      handleTagClick={() => {}}
      />
    </section>
  )
}
export default Feed