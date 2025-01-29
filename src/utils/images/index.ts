import { ImgHTMLAttributes } from "react";
import { useState, useEffect } from "react";

import img_1 from "@assets/1.jpg";
import img_2 from "@assets/2.jpg";
import img_3 from "@assets/3.jpg";
import img_4 from "@assets/4.jpg";
import img_5 from "@assets/5.jpg";
import img_7 from "@assets/7.jpg";
import img_8 from "@assets/8.jpg";
import img_9 from "@assets/9.jpg";
import img_10 from "@assets/10.jpg";
import img_11 from "@assets/11.jpg";
import img_14 from "@assets/14.jpg";
import img_15 from "@assets/15.jpg";

// Função para obter os estilos das imagens com base na largura da tela
export const getImageStylesForScreen = (screenWidth: number) => {
  if (screenWidth <= 430) {
    return {
      width: 200, // Aumenta um pouco para não ficarem tão pequenas
      marginLeft: -20, // Ajusta a margem para não ficar muito comprimido
      rotate: 5, // Menos rotação para telas menores
    };
  } else if (screenWidth <= 830) {
    return {
      width: 280, // Aumenta um pouco para não ficarem tão pequenas
      marginLeft: -40, // Ajusta a margem para não ficar muito comprimido
      rotate: 5, // Menos rotação para telas menores
    };
  } else if (screenWidth <= 1024) {
    return {
      width: 280, // Um aumento suave
      marginLeft: -50, // Um pouco maior para compensar o aumento no tamanho
      rotate: 8, // Uma rotação leve
    };
  } else {
    return {
      width: 350, // Valor médio e confortável para telas grandes
      marginLeft: -80, // Um pouco mais para telas grandes
      rotate: 10, // Um efeito de rotação mais visível
    };
  }
};

export type ImageGalleryProps = ImgHTMLAttributes<HTMLImageElement> & {
  width?: number;
  height?: number;
  rotate?: number;
};

export type ImageProps = {
  id: number;
  legend: string;
  legendPosition: "top" | "bottom";
  images: ImageGalleryProps[];
};

export const useResponsiveImages = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, marginLeft, rotate } = getImageStylesForScreen(screenWidth);

  const images = [
    {
      id: 1,
      legend:
        "* Com um sorriso que ilumina qualquer ambiente e uma presença que encanta, você sempre foi uma fonte de alegria e inspiração em todos os momentos.",
      legendPosition: "bottom",
      images: [
        { src: img_9, width, rotate: rotate * -1 },
        {
          src: img_10,
          width: width * 0.9,
          rotate: rotate,
          style: { marginLeft: marginLeft * 0.6 },
        },
      ],
    },

    {
      id: 2,
      legend:
        "* Entre risos e momentos de pura felicidade, cada sorriso compartilhado com você é uma lembrança que guardo com todo carinho.",
      legendPosition: "top",
      images: [
        { src: img_11, width, rotate: rotate * 1.5 },
        {
          src: img_1,
          width: width * 1.15,
          rotate: rotate * -1.5,
          style: { marginLeft: marginLeft * 0.9 },
        },
      ],
    },

    {
      id: 3,
      legend:
        "* Subir o serrote pode parecer complicado, mas nada se compara ao que você fez por nós. Todo o esforço que você dedicou para nos criar, sozinha, e mesmo diante de tantos desafios, seu bom humor e carinho nunca faltaram.",
      legendPosition: "bottom",
      images: [
        { src: img_2, width: width * 1.15, rotate: rotate * -1 },
        {
          src: img_3,
          width: width * 0.86,
          rotate: rotate,
          style: { marginLeft: marginLeft * 0.9 },
        },
      ],
    },

    {
      id: 4,
      legend:
        "* Ainda sobre seus esforços em nos ensinar... seguir em frente e não baixar a cabeça pra ninguém, né? Cada passo que você deu foi uma lição de força e coragem. A sua maneira de enfrentar tudo sempre me inspirou a ser mais forte e a nunca desistir.",
      legendPosition: "top",
      images: [
        { src: img_4, width, rotate },
        {
          src: img_5,
          width: width,
          rotate: rotate * -1,
          style: { marginLeft: marginLeft * 0.9 },
        },
      ],
    },

    {
      id: 5,
      legend:
        "* Mas você não pode ser perfeita, né? Aqui, seu único erro… kkkk. O mundo pode até se virar, mas você sempre esteve lá, com força e amor, sendo a leoa que nos protege e apoia em tudo.",
      legendPosition: "bottom",
      images: [
        { src: img_8, width: width * 0.86, rotate: rotate * -1 },
        {
          src: img_7,
          width: width * 1.15,
          rotate,
          style: { marginLeft: marginLeft * 0.6 },
        },
      ],
    },

    {
      id: 6,
      legend:
        "* Mesmo sem sermos perfeitos, você sempre fez o seu melhor por nós. O trabalho, o esforço, o amor e a dedicação foram incríveis, e somos imensamente gratos por tudo o que você fez. Sua presença sempre foi a força que nos uniu.",
      legendPosition: "top",
      images: [
        { src: img_14, width, rotate },
        {
          src: img_15,
          width: width * 0.86,
          rotate: rotate * -1,
          style: { marginLeft: marginLeft * 0.6 },
        },
      ],
    },
  ];

  return images;
};

export const images = [
  {
    id: 1,
    legend:
      "* Com um sorriso que ilumina qualquer ambiente e uma presença que encanta, você sempre foi uma fonte de alegria e inspiração em todos os momentos.",
    legendPosition: "bottom",
    images: [
      { src: img_9, width: 350, rotate: -10 },
      {
        src: img_10,
        width: 300,
        rotate: 10,
        style: { marginLeft: -50 },
      },
    ],
  },

  {
    id: 2,
    legend:
      "* Entre risos e momentos de pura felicidade, cada sorriso compartilhado com você é uma lembrança que guardo com todo carinho.",
    legendPosition: "top",
    images: [
      { src: img_11, width: 350, rotate: 15 },
      {
        src: img_1,
        width: 400,
        rotate: -15,
        style: { marginLeft: -70 },
      },
    ],
  },

  {
    id: 3,
    legend:
      "* Subir o serrote pode parecer complicado, mas nada se compara ao que você fez por nós. Todo o esforço que você dedicou para nos criar, sozinha, e mesmo diante de tantos desafios, seu bom humor e carinho nunca faltaram.",
    legendPosition: "bottom",
    images: [
      { src: img_2, width: 400, rotate: -10 },
      {
        src: img_3,
        width: 300,
        rotate: 10,
        style: { marginLeft: -70 },
      },
    ],
  },

  {
    id: 4,
    legend:
      "* Ainda sobre seus esforços em nos ensinar... seguir em frente e não baixar a cabeça pra ninguém, né? Cada passo que você deu foi uma lição de força e coragem. A sua maneira de enfrentar tudo sempre me inspirou a ser mais forte e a nunca desistir.",
    legendPosition: "top",
    images: [
      { src: img_4, width: 350, rotate: 10 },
      {
        src: img_5,
        width: 350,
        rotate: -10,
        style: { marginLeft: -70 },
      },
    ],
  },

  {
    id: 5,
    legend:
      "* Mas você não pode ser perfeita, né? Aqui, seu único erro… kkkk. O mundo pode até se virar, mas você sempre esteve lá, com força e amor, sendo a leoa que nos protege e apoia em tudo.",
    legendPosition: "bottom",
    images: [
      { src: img_8, width: 300, rotate: -10 },
      {
        src: img_7,
        width: 450,
        rotate: 10,
        style: { marginLeft: -50 },
      },
    ],
  },

  {
    id: 6,
    legend:
      "* Mesmo sem sermos perfeitos, você sempre fez o seu melhor por nós. O trabalho, o esforço, o amor e a dedicação foram incríveis, e somos imensamente gratos por tudo o que você fez. Sua presença sempre foi a força que nos uniu.",
    legendPosition: "top",
    images: [
      { src: img_14, width: 350, rotate: 10 },
      {
        src: img_15,
        width: 300,
        rotate: -10,
        style: { marginLeft: -50 },
      },
    ],
  },
];
