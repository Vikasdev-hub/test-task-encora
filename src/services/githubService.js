export const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/orgs/godaddy/repos');
      if (!response.ok) throw new Error('Failed to fetch repositories');
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
export const fetchRepoDetails = async (repoName) => {
    try {
      const response = await fetch(`https://api.github.com/repos/godaddy/${repoName}`);
      if (!response.ok) throw new Error('Failed to fetch repository details');
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };