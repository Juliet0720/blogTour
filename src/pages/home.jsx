"use client"

import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="container home-container">
      <section className="home-hero">
        <h1>Educational Tour Blog</h1>
        
<p>
  Join me as I share my personal experiences and insights from our educational tours. Through visits to various companies and institutions, I've gained real-world knowledge that goes beyond the classroom—and I'm excited to bring you along on the journey.


        </p>
      </section>

      <div className="button-container">
        <button onClick={() => navigate("/blog")} className="primary-button">
          Explore My Blog
        </button>
      </div>
    </div>
  )
}

export default Home
