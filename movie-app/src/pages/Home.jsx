import { useState, useEffect, use } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getpopularMovies } from "../services/api";
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadpopularMovies = async () => {
            try {
                const popularMovies = await getpopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
                setError("Failed to load movies. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        loadpopularMovies();

    }, []);

    const handleSearch = async (event) => {
        event.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }catch(error){
            console.error("Error searching movies:", error);
            setError("Failed to search movies. Please try again.");
        }finally{
            setLoading(false);
        }
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input"
                    value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && (<div className="error">{error}</div>)}

            {loading ? 
            (<div className="loading">Loading .....</div>) : 
                <div className="movies-grid">
                {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
            </div>}

        </div>
    )
}

export default Home