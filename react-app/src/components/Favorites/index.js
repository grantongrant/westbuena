import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllFavorites } from '../../store/favorite';

const Favorites = () => {

    const user = useSelector((state) => state.session.user);
    const favObject = useSelector((state) => state.favorite)
    const favorites = Object.values(favObject)
    const dispatch = useDispatch();
    let favoritesComponents;

    useEffect(() => {
        dispatch(getAllFavorites(user.id))
      }, [dispatch, user.id]);


    const FavoritesList = favorites.map((favorite) => {
        return (
            <>{favorite.id}</>
        )
    });

    if (user) {
        favoritesComponents = (
            <>
            <div>Welcome Back, {user.full_name}</div>
            <div>{FavoritesList}</div>
            </>
        )
    } else {
        favoritesComponents = (
            <div>Please sign in to view your favorites.</div>
        )
    }

    return (
        <>{favoritesComponents}</>
    )
}

export default Favorites;