import { useContext, createContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvaider = ({ children }) => {
    const [CartProducts, setCartProducts,] = useState([])

    const putProductInCart = (product) => {
        const cartIndex = CartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart = [];

        if (cartIndex >= 0) {
            newProductsInCart = CartProducts;

            newProductsInCart[cartIndex].quantity =
                newProductsInCart[cartIndex].quantity + 1;

            setCartProducts(newProductsInCart);

        } else {

            product.quantity = 1
            newProductsInCart = [...CartProducts, product];
            setCartProducts(newProductsInCart);
            updateLocalStorage(newProductsInCart);
        }
    };

    const clearCart = () => {
        setCartProducts([]);
        updateLocalStorage([]);
    }

    const deleteProduct = (productId) => {
        const newCart = CartProducts.filter((prd) => prd.id !== productId)
        setCartProducts(newCart);
        updateLocalStorage(newCart);

    };

    const increaseProduct = (productId) => {
        const newCart = CartProducts.map(prd => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
        });
        setCartProducts(newCart)
        updateLocalStorage(newCart);
    }

    const decreaseProduct = (productId) => {
        const cartIndex = CartProducts.findIndex((prd) => prd.id === productId);

        if (CartProducts[cartIndex].quantity > 1) {
            const newCart = CartProducts.map((prd) => {
                return prd.id === productId
                    ? { ...prd, quantity: prd.quantity - 1 }
                    : prd;

            });

            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }

    };

    const updateLocalStorage = (products) => {
        localStorage.setItem('deveburger:cartInfo', JSON.stringify(products));
    };

    useEffect(() => {
        const clientCartData = localStorage.getItem('deveburger:cartInfo');
        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);

    return (

        <CartContext.Provider
            value={
                {
                    CartProducts,
                    setCartProducts,
                    putProductInCart,
                    clearCart,
                    decreaseProduct,
                    increaseProduct,
                    deleteProduct,
                    

                }}
        >
            {children}
        </CartContext.Provider>

    );

};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used with a context')
    }

    return context;
}

