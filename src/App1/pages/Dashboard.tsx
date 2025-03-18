import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Dashboard = () => {
    const { favorites } = useFavorites();

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>List</h2>
            <Link to="/list">
                <button>Go to List</button>
            </Link>
            <h2>Favorites</h2>
            <ul>
                {favorites.map((id) => (
                    <li key={id}>Item {id}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
