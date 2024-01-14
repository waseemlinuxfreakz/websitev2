import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch token price
 * @param name the name of the token
 * @returns [loading, price]
 */
const useTokenPrice = (name: string): [boolean, number] => {
    const [loading, setLoading] = useState(true);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const fetchTokenPrice = async () => {
            setLoading(true);

            if (name === 'EMMET') {
                setPrice(2);
                setLoading(false);
                return;
            }

            const apiURL = "https://fee-oracle-3efdd870fbf2.herokuapp.com/?name=";
            try {
                const response = await fetch(`${apiURL}${name}`);
                if (response) {
                    const data = await response.json();
                    if (data && data.price) {
                        setPrice(Number(data.price));
                    } else {
                        setPrice(0);
                    }
                }
            } catch (error) {
                console.error(error);
                setPrice(0);
            } finally {
                setLoading(false);
            }
        };

        if (name) fetchTokenPrice();

    }, [name]);

    return [loading, price];
};

export default useTokenPrice;
