import { useEffect, useRef, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";

interface Item {
    id: number;
    title: string;
    url: string;
}

const List = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [page, setPage] = useState(1);
    const loader = useRef<HTMLDivElement>(null);
    const { favorites, toggleFavorite } = useFavorites();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`);
            const data = await res.json();
            setItems((prev) => [...prev, ...data]);
        };

        fetchData();
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setPage((prev) => prev + 1);
            },
            { threshold: 1 }
        );

        if (loader.current) observer.observe(loader.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <div className="list-page">
                <h1>List</h1>
                <button className="list-back" onClick={() => window.history.back()}>Back</button>
            </div>
            {items.map((item) => (
                <div key={item.id} className="list-item">
                    <img src={item.url} alt={item.title} />
                    <h3>{item.title}</h3>
                    <button className="fav-btn" onClick={() => toggleFavorite(item.id)}>
                        {favorites.includes(item.id) ? "Remove from Favorites" : "Add to Favorites"}
                    </button>
                </div>
            ))}
            <div ref={loader} className="loader"></div>
        </div>
    );
};

export default List;
