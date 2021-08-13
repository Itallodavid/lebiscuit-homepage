const mockDeProdutos = () => {
    const DIR_PADRAO = "./assets/images/super-ofertas";
    const PRODUTOS = [
        {
            titulo: "Conjunto de Assadeiras Nadir Marinex de Vidro com Tampa Rosa 6 Peças",
            precoAtual: { real: 139, centavo: 99 },
            precoAntigo: { real: 149, centavo: 99 },
            parcelas: { quantidade: 4, real: 34, centavo: 99 },
            estrelas: 5,
            descontoPorcentagem: "-7",
            imagemPrincipal: `${DIR_PADRAO}/conjunto-assadeira-nadir.webp`,
            imagemSecundaria: null,
        },
        {
            titulo: "Fritadeira Elétrica Air Fryer Mondial Family Af-30 3,5l Preta - 127v",
            precoAtual: { real: 379, centavo: 99 },
            precoAntigo: { real: 529, centavo: 99 },
            parcelas: { quantidade: 10, real: 37, centavo: 99 },
            estrelas: 0,
            descontoPorcentagem: "-28",
            imagemPrincipal: `${DIR_PADRAO}/fritadeira-eletrica-air-fryer-mondial-principal.webp`,
            imagemSecundaria: `${DIR_PADRAO}/fritadeira-eletrica-air-fryer-mondial-secundaria.webp`,
        },
        {
            titulo: "Batedeira Planetária Mondial Bp-03-B Preta - 700w 220v",
            precoAtual: { real: 299, centavo: 99 },
            precoAntigo: { real: 369, centavo: 99 },
            parcelas: { quantidade: 10, real: 29, centavo: 99 },
            estrelas: 0,
            descontoPorcentagem: "-19",
            imagemPrincipal: `${DIR_PADRAO}/batedeira-planetaria-mondial-principal.webp`,
            imagemSecundaria: `${DIR_PADRAO}/batedeira-planetaria-mondial-secundaria.webp`,
        },
        {
            titulo: "Micro-Ondas Philco 32 Litros Pmo33b Branco",
            precoAtual: { real: 559, centavo: 99 },
            precoAntigo: { real: 899, centavo: 99 },
            parcelas: { quantidade: 10, real: 55, centavo: 99 },
            estrelas: 0,
            descontoPorcentagem: "-38",
            imagemPrincipal: `${DIR_PADRAO}/micro-ondas-philco-principal.webp`,
            imagemSecundaria: `${DIR_PADRAO}/micro-ondas-philco-secundaria.webp`,
        },
        {
            titulo: "Fritadeira Elétrica Air Fryer Philco Gourmet Black Plus Pfr16p 5,5l Preta - 127v",
            precoAtual: { real: 519, centavo: 99 },
            precoAntigo: { real: 729, centavo: 99 },
            parcelas: { quantidade: 10, real: 51, centavo: 99 },
            estrelas: 0,
            descontoPorcentagem: "-29",
            imagemPrincipal: `${DIR_PADRAO}/fritadeira-eletrica-air-fryer-philco-gourmet-principal.webp`,
            imagemSecundaria: `${DIR_PADRAO}/fritadeira-eletrica-air-fryer-philco-gourmet-secundaria.webp`,
        },
        {
            titulo: "Fritadeira Elétrica Air Fryer Philco Gourmet Black Pfr15p 4l Preta - 220v",
            precoAtual: { real: 429, centavo: 99 },
            precoAntigo: { real: 499, centavo: 99 },
            parcelas: { quantidade: 10, real: 42, centavo: 99 },
            estrelas: 0,
            descontoPorcentagem: "-14",
            imagemPrincipal: `${DIR_PADRAO}/fritadeira-eletrica-air-fryer-philco-principal.webp`,
            imagemSecundaria: `${DIR_PADRAO}/fritadeira-eletrica-air-fryer-philco-secundaria.webp`,
        },
        {
            titulo: "Fritadeira Elétrica Air Fryer Britânia Air Flow 360° Bfr21p 4l Preta - 220v",
            precoAtual: { real: 349, centavo: 99 },
            precoAntigo: { real: 499, centavo: 99 },
            parcelas: { quantidade: 10, real: 34, centavo: 99 },
            estrelas: 0,
            descontoPorcentagem: "-14",
            imagemPrincipal: `${DIR_PADRAO}/fritadeira-eletrica-air-fryer-britania.webp`,
            imagemSecundaria: null,
        },
        {
            titulo: "Caixa Acústica Bluetooth Philco Exbass Pcx5600 - Bivolt",
            precoAtual: { real: 849, centavo: 99 },
            precoAntigo: { real: "1.199", centavo: 99 },
            parcelas: { quantidade: 10, real: 84, centavo: 99 },
            estrelas: 5,
            descontoPorcentagem: "-14",
            imagemPrincipal: `${DIR_PADRAO}/caixa-acustica-bluetooth-philco-principal.webp`,
            imagemSecundaria: `${DIR_PADRAO}/caixa-acustica-bluetooth-philco-secundaria.webp`,
        },
        {
            titulo: "Micro-Ondas Philco Pmo26es 26 Litros Prata - 220v",
            precoAtual: { real: 519, centavo: 99 },
            precoAntigo: { real: 879, centavo: 99 },
            parcelas: { quantidade: 10, real: 51, centavo: 99 },
            estrelas: 0,
            descontoPorcentagem: "-14",
            imagemPrincipal: `${DIR_PADRAO}/micro-ondas-philco-pmo26-principal.webp`,
            imagemSecundaria: `${DIR_PADRAO}/micro-ondas-philco-pmo26-secundaria.webp`,
        },
    ];

    return PRODUTOS;
};

// CARROSSEL DE BANNERS
(() => {
    const DIR_PADRAO = "./assets/images/banner-principal";
    const BANNER_IMAGENS = [
        "air-fryer-digital-painel-touch.png",
        "aparelho-de-jantar-petala.png",
        "cadeira-gamer.webp",
        "conjunto-panelas-aurora.png",
        "desconto-2-peca-mesmo-item.webp",
        "faqueiros-brinox.png",
        "fralda-descartavel-tripla-protecao.png",
        "kit-cozinha-diamante-black-2-em-1.png",
        "mega-festival-eletro-fritadeiras.png",
        "mega-festival-eletro-micro-ondas.png",
        "selecao-de-produtos.png",
        "triciclo-baby-trike-rosa.png",
    ];
    const CAMINHO_ABSOLUTO = BANNER_IMAGENS.map(
        (imagem) => `${DIR_PADRAO}/${imagem}`
    );

    new Vue({
        el: "#carrossel-banner-principal",
        data() {
            return {
                bannerPrincipal: CAMINHO_ABSOLUTO,
            };
        },
        mounted() {
            new Splide(this.$el, {
                type: "loop",
                perPage: 1,
                autoplay: true,
                classes: {
                    arrows: "splide__arrows",
                    arrow: "splide__arrow",
                    prev: "splide__arrow--prev",
                    next: "splide__arrow--next",
                },
            }).mount();

            $(this.$el.querySelector(".splide__pagination")).addClass(
                "vtex-slider-layout-0-x-paginationDotsContainer vtex-slider-layout-0-x-paginationDotsContainer--carousel flex absolute justify-center pa0 ma0 bottom-0 left-0 right-0"
            );

            $(
                this.$el.querySelectorAll(
                    ".splide__pagination .splide__pagination__page"
                )
            ).each(function () {
                $(this).addClass(
                    "vtex-slider-layout-0-x-paginationDot vtex-slider-layout-0-x-paginationDot--carousel bg-muted-3 grow dib br-100 pa2 mr2 ml2 bw0 pointer outline-0"
                );
            });
        },
    });
})();

// CAARROSSEL DE CATEGORIAS
(() => {
    const DIR_PADRAO = "./assets/images/categorias";
    const CATEGORIAS = {
        organizacao: { titulo: "Organização" },
        bar: { titulo: "Bar" },
        cozinha: { titulo: "Cozinha" },
        eletroportateis: { titulo: "Eletroportáteis" },
        eletrodomesticos: { titulo: "Eletrodomésticos" },
        telefonia: { titulo: "Telefonia" },
        decoracao: { titulo: "Decoração" },
        papelaria: { titulo: "Papelaria" },
        "mesa-posta": { titulo: "Mesa posta" },
        "cama-e-banho": { titulo: "Cama e banho" },
        "armarinho-e-artesanato": { titulo: "Armarinho e artesanato" },
        bebe: { titulo: "Bebê" },
        "higiene-beleza-e-moda": { titulo: "Higiene, beleza e moda" },
        brinquedos: { titulo: "Brinquedos" },
        festa: { titulo: "Festa" },
        lazer: { titulo: "Lazer" },
        ferramentas: { titulo: "Ferramentas" },
        "casa-inteligente": { titulo: "Casa inteligente" },
    };

    new Vue({
        el: "#carrossel-categoria",
        data() {
            return { categorias: CATEGORIAS };
        },
        methods: {
            obterTitulo(categoria) {
                return categoria.titulo;
            },
            obterImagem(categoriaNome) {
                return `${DIR_PADRAO}/${categoriaNome}.svg`;
            },
        },
        mounted() {
            new Splide(this.$el, {
                type: "loop",
                pagination: false,
                perPage: 11,
                perMove: 5,
                classes: {
                    arrows: "splide__arrows",
                    arrow: "splide__arrow",
                    prev: "splide__arrow--prev",
                    next: "splide__arrow--next",
                },
            }).mount();
        },
    });
})();

// CARROSSEL DE SUPER OFERTAS
(() => {
    //promoNiver
    new Vue({
        el: "#carrossel-super-ofertas",
        data() {
            return { produtos: mockDeProdutos() };
        },
    });
})();

// CARROSSEL DE DESCONTO 50%
(() => {
    new Vue({
        el: "#carrossel-desconto-50",
        data() {
            return {
                produtos: mockDeProdutos().map(
                    (produto) => {
                        produto["promoNiver"] = true;
                        produto.descontoPorcentagem = null;
                        produto.precoAntigo = null;
                        return produto;
                    }
                ),
            };
        },
    });
})();

// CARROSSEL OFERTAS DO CLUBE
(() => {
    new Vue({
        el: "#carrossel-ofertas-do-clube",
        data() {
            return {
                produtos: mockDeProdutos().map(
                    (produto) => {
                        produto.descontoPorcentagem = null;
                        produto.precoAntigo = null;
                        return produto;
                    }
                ),
            };
        },
    });
})();

// CARROSSEL FRETE GRATIS
(() => {
    new Vue({
        el: "#carrossel-frete-gratis",
        data() {
            return {
                produtos: mockDeProdutos(),
            };
        },
    });
})();

// CARROSSEL ELETRO 25% DESCONTO
(() => {
    new Vue({
        el: "#carrossel-eletro-25",
        data() {
            return {
                produtos: mockDeProdutos(),
            };
        },
    });
})();

// CARROSSEL OUTROS CLIENTES
(() => {
    new Vue({
        el: "#carrossel-outros-clientes",
        data() {
            return {
                produtos: mockDeProdutos(),
            };
        },
    });
})();

// CARROSSEL BAIXOU PRECO
(() => {
    new Vue({
        el: "#carrossel-baixou-preco",
        data() {
            return {
                produtos: mockDeProdutos(),
            };
        },
    });
})();

// CARROSSEL MAIS VISTO
(() => {
    new Vue({
        el: "#carrossel-mais-vistos",
        data() {
            return {
                produtos: mockDeProdutos(),
            };
        },
    });
})();

// CARROSSEL OFERTAS ESPECIAIS
(() => {
    new Vue({
        el: "#carrossel-ofertas-especiais",
        data() {
            return {
                produtos: mockDeProdutos(),
            };
        },
    });
})();