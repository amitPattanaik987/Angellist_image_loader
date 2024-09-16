import React, { useState, useEffect } from 'react';
import './Images.css';

function App() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`);
            const data = await response.json();
            
            setImages(prevImages => [...prevImages, ...data]);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchImages();
    }, [page]);  

    return (
        <div>
            <h1 className='last-header'>Image Gallery</h1>
            <div className='image-grid'>
                {images.map((image, index) => (
                    <React.Fragment key={`${image.id}-${index}`}>
                        {index % 5 === 0 && (
                            <img
                                src={image.download_url}
                                alt={image.author}
                                className='first-image'
                            />
                        )}
                        {index % 5 === 1 && (
                            <img
                                src={image.download_url}
                                alt={image.author}
                                className='second-image'
                            />
                        )}
                        {index % 5 === 2 && (
                            <img
                                src={image.download_url}
                                alt={image.author}
                                className='third-image'
                            />
                        )}
                        {index % 5 === 3 && (
                            <img
                                src={image.download_url}
                                alt={image.author}
                                className='fourth-image'
                            />
                        )}
                        {index % 5 === 4 && (
                            <img
                                src={image.download_url}
                                alt={image.author}
                                className='fifth-image'
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <button onClick={() => setPage(page + 1)}>Load More</button>
            )}
        </div>
    );
}

export default App;
