import React, { useState } from 'react'
import news1 from '../assets/images/news/news-image1.jpg'
import news2 from '../assets/images/news/news-image2.jpg'
import news3 from '../assets/images/news/news-image3.jpg'
import news4 from '../assets/images/news/news-image4.jpg'
import news5 from '../assets/images/news/news-image5.jpg'

const newsData = [
  {
    image: news1,
    category: "Men's Team",
    date: 'June 15, 2023',
    duration: '- 2 hours ago',
    title: 'Exciting Match Ends in a Draw',
  },
  {
    image: news2,
    category: "Women's Team",
    date: 'June 15, 2023',
    duration: '- 2 hours ago',
    title: 'Exciting Match Ends in a Draw',
  },
  {
    image: news3,
    category: 'Ticket News',
    date: 'June 15, 2023',
    duration: '- 2 hours ago',
    title: 'Exciting Match Ends in a Draw',
  },
  {
    image: news4,
    category: 'Club News',
    date: 'June 15, 2023',
    duration: '- 2 hours ago',
    title: 'Exciting Match Ends in a Draw',
  },
  {
    image: news5,
    category: "Men's Team",
    date: 'June 15, 2023',
    duration: '- 2 hours ago',
    title: 'Exciting Match Ends in a Draw',
  },
]

function News() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const filteredNews =
    selectedCategory === 'All'
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory)

  return (
    <>
      <div className='main'>
        <div className='news-section'>
          <h2 className='news-title'>News Updates</h2>
          <div className='category-filter'>
            <label htmlFor='category'>Filter by category:</label>
            <select
              id='category'
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value='All'>All</option>
              <option value="Men's Team">Men's Team</option>
              <option value="Women's Team">Women's Team</option>
              <option value='Ticket News'>Ticket News</option>
              <option value='Club News'>Club News</option>
            </select>
          </div>
          <div className='news-cards'>
            {filteredNews.map((news, index) => (
              <div className='news-card' key={index}>
                <img src={news.image} alt='' className='news-image' />
                <div className='news-category'>{news.category}</div>
                <div className='news-meta'>
                  <span className='news-date'>{news.date}</span>
                  <span className='news-duration'>{news.duration}</span>
                </div>
                <h3>{news.title}</h3>
                <button className='share-button'>Share</button>
              </div>
            ))}
          </div>
          <button>Load More</button>
        </div>
      </div>
    </>
  )
}

export default News
