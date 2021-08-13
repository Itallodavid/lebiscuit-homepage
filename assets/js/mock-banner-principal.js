const DIR_PADRAO = './assets/images/banner-principal';

const BANNER_IMAGENS = [
    'air-fryer-digital-painel-touch.png',
    'aparelho-de-jantar-petala.png',
    'cadeira-gamer.webp',
    'conjunto-panelas-aurora.png',
    'desconto-2-peca-mesmo-item.webp',
    'faqueiros-brinox.png',
    'fralda-descartavel-tripla-protecao.png',
    'kit-cozinha-diamante-black-2-em-1.png',
    'mega-festival-eletro-fritadeiras.png',
    'mega-festival-eletro-micro-ondas.png',
    'selecao-de-produtos.png',
    'triciclo-baby-trike-rosa.png'
];

const CAMINHO_ABSOLUTO = BANNER_IMAGENS.map((imagem) => `${DIR_PADRAO}/${imagem}`);

console.log(CAMINHO_ABSOLUTO);