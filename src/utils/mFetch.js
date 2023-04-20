
let products = [
    {
            "id": '1',
            "name": "Gorra GoT",
            "price": "800",
            "description": "Gorra de Game of Thrones",
            "category": "series",
            "colors": "azul",
            "size": "xl",
            "img": "/assets/products/gorraGOT.png",
            "stock": 10
    },
    {
            "id": '2',
            "name": "Mate GoT",
            "price": "1200",
            "description": "Mate de Game of Thrones",
            "category": "series",
            "colors": "azul",
            "size": "xl",
            "img": "/assets/products/mateGOT.png",
            "stock": 10
    },
    {
            "id": '3',
            "name": "Remera BigBang",
            "price": "1000",
            "description": "Remera de The Big Bang Theory",
            "category": "series",
            "colors": "azul",
            "size": "xl",
            "img": "/assets/products/remeraBigNegra.png",
            "stock": 10
    },
    {
            "id": '4',
            "name": "Gorra BigBang",
            "price": "800",
            "description": "Gorra de The Big Bang Theory",
            "category": "series",
            "colors": "azul",
            "size": "xl",
            "img": "/assets/products/gorraBigBang.png",
            "stock": 10
    },
    {
            "id": '5',
            "name": "Mate BigBang",
            "price": "1200",
            "description": "Mate de The Big Bang Theory",
            "category": "series",
            "colors": "azul",
            "size": "xl",
            "img": "/assets/products/mateBig.png",
            "stock": 10
    },
    {
            "id": '6',
            "name": "Remera Spiderman",
            "price": "1000",
            "description": "Remera de Spiderman",
            "category": "films",
            "colors": "azul",
            "size": "xl",
            "img": "/assets/products/remeraSpidermanNegra.png",
            "stock": 10
    },
    {
            "id": '7',
            "name": "Gorra Spiderman",
            "price": "800",
            "description": "Gorra de Spiderman",
            "category": "films",
            "colors": "azul",
            "size": "xl",
            "img": "/assets/products/gorraSpiderman.png",
            "stock": 10
    },
    {
            "id": '8',
            "name": "Mate Spiderman",
            "price": "1200",
            "description": "Mate de Spiderman",
            "category": "films",
            "colors": "azul",
            "size": "xl",
            "img": "/assets/products/mateSpiderman.png",
            "stock": 10
    },
    {
            "id": '9',
            "name": "Remera Superman",
            "description": "Remera de Superman",
            "price": "1000",
            "category": "films",
            "colors": [
                    "black",
                    "white",
                    "grey",
                    "Red",
                    "blue"
            ],
            "size": [
                    "xs",
                    "s",
                    "m",
                    "l",
                    "xl"
            ],
            "img": "/assets/products/remeraSuperman.png",
            "stock": 10
    },
    {
            "id": '10',
            "name": "Gorra Superman",
            "price": "800",
            "description": "Gorra de Superman",
            "category": "films",
            "colors": "azul",
            "size": "xl",
            "img": "/assets/products/gorraSuperman.png",
            "stock": 10
    },
    {
            "id": '11',
            "name": "Mate Superman",
            "price": "1200",
            "description": "Mate de Superman",
            "category": "films",
            "colors": "azul",
            "size": "xl",
            "img": "/assets/products/mateSuperman.png",
            "stock": 10
    },
    {
            "id": '12',
            "name": "RemeraGOT",
            "description": "Remera de Game of Thrones",
            "category": "series",
            "colors": [
                    "Black",
                    "grey",
                    "blue"
            ],
            "size": [
                    "xs",
                    "m",
                    "xl"
            ],
            "price": "1000",
            "stock": 10,
            "img": "/assets/products/remeraGOTnegra.png"
    }
]


export const mFetch = () =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(products)
        }, 1000)
    }) 
} 