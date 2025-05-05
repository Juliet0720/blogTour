"use client"

function PostDetail({ post, onBack }) {
  return (
    <article className="post-detail">
      <div className="post-detail-header">
        
        <button onClick={onBack} className="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="back-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
         
        </button>
        <div className="post-meta">
          <div className="post-date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="calendar-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      <div className="post-detail-content">
        <h1 className="post-title">{post.title}</h1>

        <div className="post-featured-image">
          <img src={post.image || "https://placehold.co/800x400"} alt={post.title} />
        </div>

        <div className="post-body">
          <p className="post-intro">{post.description}</p>

          <p>{post.fullContent}</p>

          {post.dayImages?.map((group, groupIndex) => (
  <div key={groupIndex} className="post-image-gallery">
    <figure>
      {group.images.map((img, index) => (
        <img key={index} src={img} alt={`Day ${post.id} Image ${groupIndex}-${index}`} />
      ))}
      {group.caption && <figcaption>{group.caption}</figcaption>}
    </figure>

    <div className="post-section">
      <h2>{group.sectionTitle || "Future Developments"}</h2>
      <p>{group.sectionText || "No additional details provided."}</p>
    </div>

    {/* Check if this is Day 5 and conditionally show the extra featured image */}
    {group.caption === "Law Enforcement Division" && groupIndex === 3 && post.featuredAddition && (
      <div className="post-featured-image extra-featured">
        <img src={post.featuredAddition.image} alt="Additional Highlight" />
        <p className="post-intro">{post.featuredAddition.description}</p>
      </div>
    )}
  </div>
))}


 

          <div className="post-quote">
            <blockquote>
              "In every corner we turned, there was a new lesson, a fresh perspective, and a story waiting to be told. The journey isn't just about seeing places, but about embracing the moments and the people we meet along the way"
            </blockquote>
            <cite>— Anonymous</cite>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostDetail
