import React, { useState } from 'react';
import { Typography, Select, MenuItem, Button, Card, CardMedia, CardContent, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import news1 from '../assets/images/news/news-image1.jpg';
import news2 from '../assets/images/news/news-image2.jpg';
import news3 from '../assets/images/news/news-image3.jpg';
import news4 from '../assets/images/news/news-image4.jpg';
import news5 from '../assets/images/news/news-image5.jpg';

const newsData = [
  // News data remains the same
  // News data remains the same
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
  
];

const useStyles = makeStyles((theme) => ({
  // Styling classes remain the same
  main: {
    padding: theme.spacing(2),
  },
  newsSection: {
    marginBottom: theme.spacing(2),
  },
  newsTitle: {
    marginBottom: theme.spacing(2),
  },
  categoryFilter: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  selectLabel: {
    marginRight: theme.spacing(2),
  },
  newsCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: theme.spacing(2),
  },
  newsCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    boxShadow: theme.shadows[2],
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
  },
  newsImage: {
    height: 200,
    objectFit: 'cover',
  },
  newsCategory: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  newsMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
}));

function News() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const classes = useStyles();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredNews =
    selectedCategory === 'All'
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);

  return (
    <div className={classes.main}>
      <div className={classes.newsSection}>
        <Typography variant="h2" className={classes.newsTitle}>
          News Updates
        </Typography>
        <div className={classes.categoryFilter}>
          <Typography variant="body1" className={classes.selectLabel}>
            Filter by category:
          </Typography>
          <Select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="outlined"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Men's Team">Men's Team</MenuItem>
            <MenuItem value="Women's Team">Women's Team</MenuItem>
            <MenuItem value="Ticket News">Ticket News</MenuItem>
            <MenuItem value="Club News">Club News</MenuItem>
          </Select>
        </div>
        <Grid container spacing={3}>
          {filteredNews.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.newsCard}>
                <CardMedia
                  component="img"
                  image={news.image}
                  alt=""
                  className={classes.newsImage}
                />
                <CardContent>
                  <div className={classes.newsCategory}>{news.category}</div>
                  <div className={classes.newsMeta}>
                    <Typography variant="body2">{news.date}</Typography>
                    <Typography variant="body2">{news.duration}</Typography>
                  </div>
                  <Typography variant="h3">{news.title}</Typography>
                  <Button variant="contained" color="primary" className={classes.shareButton}>
                    Share
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" className={classes.loadMoreBtn}>
          Load More
        </Button>
      </div>
    </div>
  );
}

export default News;
