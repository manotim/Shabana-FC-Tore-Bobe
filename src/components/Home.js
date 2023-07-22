import React, { useState, useEffect } from 'react';
import { Button, Typography, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

import homepic1 from '../assets/images/home-page.jpg';
import homepic2 from '../assets/images/home-page2.jpg';
import homepic3 from '../assets/images/home-page3.jpg';
import news1 from '../assets/images/news/news-image1.jpg';
import news2 from '../assets/images/news/news-image2.jpg';
import news3 from '../assets/images/news/news-image3.jpg';
import news4 from '../assets/images/news/news-image4.jpg';
import news5 from '../assets/images/news/news-image5.jpg';

const HomeWrapper = styled('div')({
  // Add any custom styles to the wrapper element
  // e.g., background color, padding, etc.
});

const ButtonWrapper = styled('div')({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

const NewsCardsWrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (max-width: 580px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});

const NewsCardWrapper = styled(Card)({
  width: '100%',
  marginBottom: '20px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '7px'
});

const NewsImage = styled(CardMedia)({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  marginBottom: '10px',
  borderRadius: '7px'
});

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [homepic1, homepic2, homepic3];
  const [imageInfo, setImageInfo] = useState({ title: '', description: '' });

  const imageInfoData = [
    { title: 'Image 1 Title', description: 'Description of image 1.' },
    { title: 'Image 2 Title', description: 'Description of image 2.' },
    { title: 'Image 3 Title', description: 'Description of image 3.' },
  ];

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000);

    // Clear the interval when the component unmounts or the image array changes
    return () => clearInterval(interval);
  }, [goToNextImage]);

  useEffect(() => {
    const { title, description } = imageInfoData[currentImage];
    setImageInfo({ title, description });
  }, [currentImage, imageInfoData]);

  return (
    <HomeWrapper className='home-page'>
      <CardMedia component="img" src={images[currentImage]} alt='home page' className='home-image' />

      <ButtonWrapper>
        <Button
          sx={{ zIndex: 1 }}
          onClick={goToPrevImage}
        >
          &lt;
        </Button>

        <Button
          sx={{ zIndex: 1 }}
          onClick={goToNextImage}
        >
          &gt;
        </Button>
      </ButtonWrapper>

      <div className='main'>
        <div className='image-info'>
          <Typography variant="h1" className='image-title'>{imageInfo.title}</Typography>
          <Typography variant="h5" className='image-description'>{imageInfo.description}</Typography>
          <Button variant="contained" color="primary" className='call-to-action'>Call to Action</Button>
        </div>

        <div className='news-section'>
          <Typography variant="h2" className='news-title'>News Updates</Typography>

          <NewsCardsWrapper className='news-cards'>
            <NewsCardWrapper className='news-card'>
              <NewsImage component="img" src={news1} alt='' className='news-image' />
              <div className='news-category'>Sports</div>
              <div className='news-meta'>
                <span className='news-date'>June 15, 2023</span>
                <span className='news-duration'>- 2 hours ago</span>
              </div>
              <Typography variant="h3">Exciting Match Ends in a Draw</Typography>
              <Button variant="outlined" className='share-button'>Share</Button>
            </NewsCardWrapper>

            <NewsCardWrapper className='news-card'>
              <NewsImage component="img" src={news2} alt='' className='news-image' />
              <div className='news-category'>Sports</div>
              <div className='news-meta'>
                <span className='news-date'>June 15, 2023</span>
                <span className='news-duration'>- 2 hours ago</span>
              </div>
              <Typography variant="h3">Exciting Match Ends in a Draw</Typography>
              <Button variant="outlined" className='share-button'>Share</Button>
            </NewsCardWrapper>

            <NewsCardWrapper className='news-card'>
              <NewsImage component="img" src={news3} alt='' className='news-image' />
              <div className='news-category'>Sports</div>
              <div className='news-meta'>
                <span className='news-date'>June 15, 2023</span>
                <span className='news-duration'>- 2 hours ago</span>
              </div>
              <Typography variant="h3">Exciting Match Ends in a Draw</Typography>
              <Button variant="outlined" className='share-button'>Share</Button>
            </NewsCardWrapper>

            <NewsCardWrapper className='news-card'>
              <NewsImage component="img" src={news4} alt='' className='news-image' />
              <div className='news-category'>Sports</div>
              <div className='news-meta'>
                <span className='news-date'>June 15, 2023</span>
                <span className='news-duration'>- 2 hours ago</span>
              </div>
              <Typography variant="h3">Exciting Match Ends in a Draw</Typography>
              <Button variant="outlined" className='share-button'>Share</Button>
            </NewsCardWrapper>

            <NewsCardWrapper className='news-card'>
              <NewsImage component="img" src={news5} alt='' className='news-image' />
              <div className='news-category'>Sports</div>
              <div className='news-meta'>
                <span className='news-date'>June 15, 2023</span>
                <span className='news-duration'>- 2 hours ago</span>
              </div>
              <Typography variant="h3">Exciting Match Ends in a Draw</Typography>
              <Button variant="outlined" className='share-button'>Share</Button>
            </NewsCardWrapper>
          </NewsCardsWrapper>

          <Button variant="contained">More News</Button>
        </div>
      </div>
    </HomeWrapper>
  );
}

export default Home;
