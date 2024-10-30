import React, { useEffect, useState } from 'react';
import { fetchRepos } from '../services/githubService';
import RepoCard from '../components/RepoCard';
import { Container, Typography, CircularProgress, Box, useTheme } from '@mui/material';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const loadRepos = async () => {
      const data = await fetchRepos();
      setRepos(data);
      setLoading(false);
    };
    loadRepos();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{backgroundColor: theme.palette.background.default}}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          my: 3,
          padding: 2,
          borderRadius: 1,
        }}
      >
        GoDaddy Repositories
      </Typography>
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </Container>
  );
};

export default RepoList;
