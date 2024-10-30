import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const RepoCard = ({ repo }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        margin: 2,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[3],
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: theme.shadows[1],
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" color={theme.palette.primary.main}>
          {repo.name}
        </Typography>
        <Typography color="text.secondary" variant="body2" sx={{ mt: 1 }}>
          {repo.description || 'No description available'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/repos/${repo.name}`}
          size="small"
          variant='outlined'
          color={theme.palette.secondary.main}
         
          sx={{
            fontSize:12,
            color: theme.palette.secondary.main,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default RepoCard;
