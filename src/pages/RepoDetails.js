import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Link, CircularProgress, Box, useTheme } from '@mui/material';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import BugReportIcon from '@mui/icons-material/BugReport';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import { fetchRepoDetails } from '../services/githubService';

const RepoDetails = () => {
    const { repoName } = useParams();
    const [repo, setRepo] = useState(null);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();

    useEffect(() => {
        const loadRepoDetails = async () => {
            const data = await fetchRepoDetails(repoName);
            setRepo(data);
            setLoading(false);
        };
        loadRepoDetails();
    }, [repoName]);

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
        <Container sx={{ my: 3, backgroundColor: theme.palette.background.default, padding: 3, borderRadius: 2 }}>
            <Typography
                variant="h3"
                sx={{
                    color: theme.palette.primary.main,
                    mb: 4,
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}
            >
                Repository Details
            </Typography>

            {repo ? (
                <>
                    <Typography
                        variant="h4"
                        sx={{
                            color: theme.palette.primary.main,
                            borderBottom: `2px solid ${theme.palette.primary.main}`,
                            paddingBottom: 1,
                            mb: 2,
                        }}
                    >
                        {repo.name}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {repo.description || 'No description available'}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Language:</strong> {repo.language || 'N/A'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ForkRightIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />
                            <strong>Forks:</strong> {repo.forks}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <BugReportIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />
                            <strong>Open Issues:</strong> {repo.open_issues}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <VisibilityIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />
                            <strong>Watchers:</strong> {repo.watchers}
                        </Typography>
                    </Box>

                    <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: theme.palette.secondary.main,
                            textDecoration: 'none',
                            '&:hover': {
                                color: theme.palette.primary.main,
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <GitHubIcon fontSize="small" sx={{ verticalAlign: 'middle', marginRight: 0.5 }} />
                            <Box>
                                Go to GitHub Repo
                            </Box>
                        </Box>

                    </Link>
                </>
            ) : (
                <Typography color="error">Repository not found</Typography>
            )}
        </Container>
    );
};

export default RepoDetails;
