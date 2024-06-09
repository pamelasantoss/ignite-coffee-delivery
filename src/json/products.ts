import expressoTradicionalImage from "../assets/products/expresso-tradicional.png";
import expressoAmericanoImage from "../assets/products/expresso-americano.png";
import expressoCremosoImage from "../assets/products/expresso-cremoso.png";
import expressoGeladoImage from "../assets/products/expresso-gelado.png";
import cafeComLeiteImage from "../assets/products/cafe-com-leite.png";
import latteImage from "../assets/products/latte.png";
import capuccinoImage from "../assets/products/capuccino.png";
import macchiatoImage from "../assets/products/macchiato.png";
import mochaccinoImage from "../assets/products/mochaccino.png";
import chocolateQuenteImage from "../assets/products/chocolate-quente.png";
import cubanoImage from "../assets/products/cubano.png";
import havaianoImage from "../assets/products/havaiano.png";
import arabeImage from "../assets/products/arabe.png";
import irlandesImage from "../assets/products/irlandes.png";

export const products = [
  {
    id: 1,
    image: expressoTradicionalImage,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
    quantity: 1,
    tags: [
      "tradicional"
    ]
  },
  {
    id: 2,
    image: expressoAmericanoImage,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
    quantity: 1,
    tags: [
      "tradicional"
    ]
  },
  {
    id: 3,
    image: expressoCremosoImage,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
    quantity: 1,
    tags: [
      "tradicional"
    ]
  },
  {
    id: 4,
    image: expressoGeladoImage,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
    quantity: 1,
    tags: [
      "tradicional", "gelado"
    ]
  },
  {
    id: 5,
    image: cafeComLeiteImage,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
    quantity: 1,
    tags: [
      "tradicional", "com leite"
    ]
  },
  {
    id: 6,
    image: latteImage,
    name: "Latte",
    description: "Uma dose de café expresso com o dobro do leite e espuma cremosa",
    price: 9.90,
    quantity: 1,
    tags: [
      "tradicional", "com leite"
    ]
  },
  {
    id: 7,
    image: capuccinoImage,
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
    quantity: 1,
    tags: [
      "tradicional", "com leite"
    ]
  },
  {
    id: 8,
    image: macchiatoImage,
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
    quantity: 1,
    tags: [
      "tradicional", "com leite"
    ]
  },
  {
    id: 9,
    image: mochaccinoImage,
    name: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
    quantity: 1,
    tags: [
      "tradicional", "com leite"
    ]
  },
  {
    id: 10,
    image: chocolateQuenteImage,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
    quantity: 1,
    tags: [
      "especial", "com leite"
    ]
  },
  {
    id: 11,
    image: cubanoImage,
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
    quantity: 1,
    tags: [
      "especial", "alcoólico", "gelado"
    ]
  },
  {
    id: 12,
    image: havaianoImage,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
    quantity: 1,
    tags: [
      "especial"
    ]
  },
  {
    id: 13,
    image: arabeImage,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
    quantity: 1,
    tags: [
      "especial"
    ]
  },
  {
    id: 14,
    image: irlandesImage,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
    quantity: 1,
    tags: [
      "especial", "alcoólico"
    ]
  }
];