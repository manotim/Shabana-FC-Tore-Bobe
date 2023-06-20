import React, { useState, useEffect } from 'react'
import homepic1 from '../assets/images/home-page.jpg'
import homepic2 from '../assets/images/home-page2.jpg'
import homepic3 from '../assets/images/home-page3.jpg'
import news1 from '../assets/images/news/news-image1.jpg'
import news2 from '../assets/images/news/news-image2.jpg'
import news3 from '../assets/images/news/news-image3.jpg'
import news4 from '../assets/images/news/news-image4.jpg'
import news5 from '../assets/images/news/news-image5.jpg'

function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [homepic1, homepic2, homepic3]
  const [imageInfo, setImageInfo] = useState({ title: '', description: '' })

  const imageInfoData = [
    { title: 'Image 1 Title', description: 'Description of image 1.' },
    { title: 'Image 2 Title', description: 'Description of image 2.' },
    { title: 'Image 3 Title', description: 'Description of image 3.' },
  ]

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  const goToPrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000)

    // Clear the interval when the component unmounts or the image array changes
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const { title, description } = imageInfoData[currentImage]
    setImageInfo({ title, description })
  }, [currentImage])

  return (
    <>
      <div className='home-page'>
        <button className='arrow left' onClick={goToPrevImage}>
          &lt;
        </button>
        <img
          src={images[currentImage]}
          alt='home page'
          className='home-image'
        />
        <button className='arrow right' onClick={goToNextImage}>
          &gt;
        </button>
      </div>

      <div className='main'>
        <div className='image-info'>
          <h1 className='image-title'>{imageInfo.title}</h1>
          <h5 className='image-description'>{imageInfo.description}</h5>
          <button className='call-to-action'>Call to Action</button>
        </div>
        <div className='news-section'>
          <h2 className='news-title'>News Updates</h2>
          <div className='news-cards'>
            {/* News cards */}
            <div className='news-card'>
              <img src={news1} alt='' className='news-image' />
              <div className='news-category'>Sports</div>
              <div className='news-meta'>
                <span className='news-date'>June 15, 2023</span>
                <span className='news-duration'>- 2 hours ago</span>
              </div>
              <h3>Exciting Match Ends in a Draw</h3>
              <button className='share-button'>Share</button>
            </div>

            <div className='news-card'>
              <img src={news2} alt='' className='news-image' />
              <div className='news-category'>Sports</div>
              <div className='news-meta'>
                <span className='news-date'>June 15, 2023</span>
                <span className='news-duration'>- 2 hours ago</span>
              </div>
              <h3>Exciting Match Ends in a Draw</h3>
              <button className='share-button'>Share</button>
            </div>

            <div className='news-card'>
              <img src={news3} alt='' className='news-image' />
              <div className='news-category'>Sports</div>
              <div className='news-meta'>
                <span className='news-date'>June 15, 2023</span>
                <span className='news-duration'>- 2 hours ago</span>
              </div>
              <h3>Exciting Match Ends in a Draw</h3>
              <button className='share-button'>Share</button>
            </div>

            <div className='news-card'>
              <img src={news4} alt='' className='news-image' />
              <div className='news-category'>Sports</div>
              <div className='news-meta'>
                <span className='news-date'>June 15, 2023</span>
                <span className='news-duration'>- 2 hours ago</span>
              </div>
              <h3>Exciting Match Ends in a Draw</h3>
              <button className='share-button'>Share</button>
            </div>

            <div className='news-card'>
              <img src={news5} alt='' className='news-image' />
              <div className='news-category'>Sports</div>
              <div className='news-meta'>
                <span className='news-date'>June 15, 2023</span>
                <span className='news-duration'>- 2 hours ago</span>
              </div>
              <h3>Exciting Match Ends in a Draw</h3>
              <button className='share-button'>Share</button>
            </div>
          </div>
          <button>More News</button>
        </div>
      </div>
    </>
  )
}

export default Home
