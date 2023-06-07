import { useFetch } from '../utils/useFetch';
import { ImageCard } from './ImageCard';

export const Other = () => {
    const { apiData } = useFetch(
        'https://api.thecatapi.com/v1/breeds?limit=4'
    );
    return (
        <>
            {!apiData ? (
                <span>Loading.....</span>
            ) : (
                <>
                    {Object.assign(apiData).map((e,id) => (
                        <ImageCard
                            key ={id}
                            data={e}
                            title={e.name}
                        />
                    ))}
                </>
            )}
        </>
    );
};