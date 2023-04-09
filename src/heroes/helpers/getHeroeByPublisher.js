import { heroes } from '../data/heroes';


export const getHeroeByPublisher = ( publisher ) => {
    const validPublisher = ["DC Comics", "Marvel Comics"];

    if ( !validPublisher.includes( publisher )) {
      throw new Error( `${publisher} is not a valid heroe`);
    };
    return heroes.filter((e) => e.publisher === publisher);  
};