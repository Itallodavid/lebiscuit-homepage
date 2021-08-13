(() => {
    Vue.component('card-produto', {
        name: 'card-produto',
        props: ['produto'],
        template: `<div aria-hidden="false" role="group" aria-roledescription="slide" aria-label="6 of 10" class="vtex-slider-layout-0-x-slide vtex-slider-layout-0-x-slide--shelf-desk vtex-slider-layout-0-x-slide--firstVisible vtex-slider-layout-0-x-slide--shelf-desk--firstVisible vtex-slider-layout-0-x-slide--visible vtex-slider-layout-0-x-slide--shelf-desk--visible flex relative" data-index="6" style="width: 240px !important;"> <div class="vtex-slider-layout-0-x-slideChildrenContainer vtex-slider-layout-0-x-slideChildrenContainer--shelf-desk flex justify-center items-center w-100"> <section class="vtex-product-summary-2-x-container vtex-product-summary-2-x-container--product-summary-shelf vtex-product-summary-2-x-containerNormal vtex-product-summary-2-x-containerNormal--product-summary-shelf overflow-hidden br3 h-100 w-100 flex flex-column justify-between center tc" style="max-width: 300px;"><a href="#" class="vtex-product-summary-2-x-clearLink vtex-product-summary-2-x-clearLink--product-summary-shelf h-100 flex flex-column"> <article class="vtex-product-summary-2-x-element vtex-product-summary-2-x-element--product-summary-shelf pointer pt3 pb4 flex flex-column h-100"> <div v-if="produto.promoNiver" class="vtex-stack-layout-0-x-stackContainer vtex-stack-layout-0-x-stackContainer--birthday-icon relative"><div class="vtex-stack-layout-0-x-stackItem vtex-stack-layout-0-x-stackItem--birthday-icon vtex-stack-layout-0-x-stackItem--first vtex-stack-layout-0-x-stackItem--birthday-icon--first " style="z-index: 991; position: absolute;"><div class="vtex-flex-layout-0-x-flexRow vtex-flex-layout-0-x-flexRow--row-birthday-icon"><div class="flex mt0 mb0 pt0 pb0 justify-start vtex-flex-layout-0-x-flexRowContent vtex-flex-layout-0-x-flexRowContent--row-birthday-icon items-stretch w-100"><div class="pr0 items-stretch vtex-flex-layout-0-x-stretchChildrenWidth flex" style="width: 100%;"><img title="Selo Aniversário" sizes="" srcset="" alt="Selo Aniversário" class="vtex-store-components-3-x-imageElement vtex-store-components-3-x-imageElement--birthday-icon vtex-render-runtime-8-x-lazyload" crossorigin="anonymous" data-src="./assets/images/aniversario.gif" loading="eager" src="./assets/images/aniversario.gif"></div></div></div></div></div><div class="vtex-stack-layout-0-x-stackContainer vtex-stack-layout-0-x-stackContainer--stack-to-image-button relative"> <div class="vtex-stack-layout-0-x-stackItem vtex-stack-layout-0-x-stackItem--stack-to-image-button vtex-stack-layout-0-x-stackItem--first vtex-stack-layout-0-x-stackItem--stack-to-image-button--first vtex-stack-layout-0-x-stackItem vtex-stack-layout-0-x-stackItem--stack-to-image-button vtex-stack-layout-0-x-stackItem--summary vtex-stack-layout-0-x-stackItem--stack-to-image-button--summary" style="z-index: 1;"> <div class="vtex-product-summary-2-x-imageContainer vtex-product-summary-2-x-imageWrapper vtex-product-summary-2-x-imageWrapper--summary db w-100 center"> <div class="vtex-store-components-3-x-discountContainer relative dib"> <div v-if="produto.descontoPorcentagem" class="vtex-store-components-3-x-discountInsideContainer t-mini white absolute right-0 pv2 ph3 bg-emphasis z-1">{{produto.descontoPorcentagem}}% </div><div class="dib relative vtex-product-summary-2-x-imageContainer vtex-product-summary-2-x-imageContainer--summary vtex-product-summary-2-x-imageStackContainer vtex-product-summary-2-x-hoverEffect"> <img loading="lazy" alt="Micro-Ondas Philco 32 Litros Pmo33b Branco" class="vtex-product-summary-2-x-imageNormal vtex-product-summary-2-x-image vtex-product-summary-2-x-image--summary vtex-render-runtime-8-x-lazyload" :class="[produto.imagemSecundaria ? 'vtex-product-summary-2-x-mainImageHovered vtex-product-summary-2-x-mainImageHovered--summary' : '']" crossorigin="anonymous" :data-src="produto.imagemPrincipal" :src="produto.imagemPrincipal" style="width: 100%; height: 100%; object-fit: contain; max-height: 300px;"> <img v-if="produto.imagemSecundaria" loading="lazy" alt="Micro-Ondas Philco 32 Litros Pmo33b Branco" class="w-100 h-100 dn absolute top-0 left-0 z-999 vtex-product-summary-2-x-image vtex-product-summary-2-x-image--summary vtex-product-summary-2-x-image--hover vtex-product-summary-2-x-image--summary--hover vtex-product-summary-2-x-imageNormal vtex-product-summary-2-x-hoverImage vtex-render-runtime-8-x-lazyload lazyloaded" crossorigin="anonymous" :data-src="produto.imagemSecundaria" style="width: 100%; height: 100%; object-fit: contain; max-height: 300px;" :src="produto.imagemSecundaria"> </div></div></div></div><div class="vtex-stack-layout-0-x-stackItem vtex-stack-layout-0-x-stackItem--stack-to-image-button absolute top-0 left-0 w-auto h-auto " style="z-index: 2;"><button class="lebiscuit-le-component-0-x-cond_quickview b--none w-100 dn justify-center items-center b pv3 br3 lh-copy lb-bg-green white pointer absolute bottom-0">Adicionar à sacola <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml3"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.364 17.7598H11.8603C12.6956 18.2313 13.6569 18.4998 14.6798 18.4998C17.8938 18.4998 20.4993 15.8493 20.4993 12.5798C20.4993 9.39975 18.0345 6.80535 14.9424 6.66567L14.6785 3.90042C14.6551 3.64619 14.4248 3.45369 14.1555 3.45369H11.9075C11.8762 1.54331 10.198 -0.000244141 8.13726 -0.000244141C6.07652 -0.000244141 4.39827 1.54331 4.36705 3.45369H2.11897C1.84577 3.45369 1.6194 3.64619 1.59598 3.90042L0.503171 15.3518C0.503171 15.3591 0.502195 15.3663 0.501219 15.3736C0.500243 15.3809 0.499268 15.3881 0.499268 15.3954C0.499268 16.6992 1.78332 17.7598 3.364 17.7598ZM3.364 16.7791H10.578C9.5172 15.7068 8.86042 14.2213 8.86042 12.5798C8.86042 9.58303 11.0492 7.10636 13.8892 6.71393L13.6716 4.43794H11.9075V5.92702C11.9075 6.19941 11.6733 6.41733 11.3806 6.41733C11.0879 6.41733 10.8537 6.19941 10.8537 5.92702V4.43794H5.41693V5.92702C5.41693 6.19941 5.18276 6.41733 4.89004 6.41733C4.59732 6.41733 4.36315 6.19941 4.36315 5.92702V4.43794H2.59903L1.55305 15.4172C1.56866 16.169 2.37266 16.7791 3.364 16.7791ZM8.13726 0.980369C9.61646 0.980369 10.8225 2.08447 10.8537 3.45369H5.42083C5.45206 2.08447 6.65806 0.980369 8.13726 0.980369ZM15.4626 13.3616H17.5899V11.7983H15.4626V9.61994H13.8855V11.7983H11.7705V13.3616H13.8855V15.5399H15.4626V13.3616Z" fill="#ffffff"></path> </svg></button></div></div><div class="vtex-product-summary-2-x-nameContainer flex items-start justify-center pv6"> <h1 class="vtex-product-summary-2-x-productNameContainer mv0 vtex-product-summary-2-x-nameWrapper overflow-hidden c-on-base f5"> <span class="vtex-product-summary-2-x-productBrand vtex-product-summary-2-x-brandName t-body">{{produto.titulo}}</span> </h1> </div><div class="vtex-flex-layout-0-x-flexCol vtex-flex-layout-0-x-flexCol--product-rating ml0 mr0 pl0 pr0 flex flex-column h-100 w-100"> <div class="vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--product-rating pb0" style="height: auto;"> <div v-if="produto.estrelas" class="vtex-reviews-and-ratings-2-x-inlineContainer review-summary mw8 center"> <span class="t-heading-5 v-mid"> <span class="vtex-reviews-and-ratings-2-x-stars c-action-primary"> <span v-for="estrela in produto.estrelas" class="vtex-reviews-and-ratings-2-x-star vtex-reviews-and-ratings-2-x-star--filled">★</span> </span> </span> </div></div></div><span v-if="produto.precoAntigo" class="vtex-product-price-1-x-listPrice vtex-product-price-1-x-listPrice--summary">de <span class="vtex-product-price-1-x-listPriceValue vtex-product-price-1-x-listPriceValue--summary strike"><span class="vtex-product-price-1-x-currencyContainer vtex-product-price-1-x-currencyContainer--summary"> <span class="vtex-product-price-1-x-currencyCode vtex-product-price-1-x-currencyCode--summary">R$</span><span class="vtex-product-price-1-x-currencyLiteral vtex-product-price-1-x-currencyLiteral--summary">&nbsp;</span><span class="vtex-product-price-1-x-currencyInteger vtex-product-price-1-x-currencyInteger--summary">{{produto.precoAntigo.real}}</span> <span class="vtex-product-price-1-x-currencyDecimal vtex-product-price-1-x-currencyDecimal--summary">,</span><span class="vtex-product-price-1-x-currencyFraction vtex-product-price-1-x-currencyFraction--summary">{{produto.precoAntigo.centavo}}</span> </span> </span> </span> <span class="vtex-product-price-1-x-sellingPrice vtex-product-price-1-x-sellingPrice--summary vtex-product-price-1-x-sellingPrice--hasListPrice vtex-product-price-1-x-sellingPrice--summary--hasListPrice"> <span class="vtex-product-price-1-x-sellingPriceValue vtex-product-price-1-x-sellingPriceValue--summary"> <span class="vtex-product-price-1-x-currencyContainer vtex-product-price-1-x-currencyContainer--summary"> <span class="vtex-product-price-1-x-currencyCode vtex-product-price-1-x-currencyCode--summary">R$</span> <span class="vtex-product-price-1-x-currencyLiteral vtex-product-price-1-x-currencyLiteral--summary">&nbsp;</span><span class="vtex-product-price-1-x-currencyInteger vtex-product-price-1-x-currencyInteger--summary">{{produto.precoAtual.real}}</span> <span class="vtex-product-price-1-x-currencyDecimal vtex-product-price-1-x-currencyDecimal--summary">,</span> <span class="vtex-product-price-1-x-currencyFraction vtex-product-price-1-x-currencyFraction--summary">{{produto.precoAtual.centavo}}</span> </span> </span> </span> <span class="vtex-product-price-1-x-installments vtex-product-price-1-x-installments--summary"><span class="vtex-product-price-1-x-installmentsNumber vtex-product-price-1-x-installmentsNumber--summary vtex-product-price-1-x-installmentsNumber--10 vtex-product-price-1-x-installmentsNumber--summary--10">{{produto.parcelas.quantidade}}</span>x <span class="vtex-product-price-1-x-installmentValue vtex-product-price-1-x-installmentValue--summary"><span class="vtex-product-price-1-x-currencyContainer vtex-product-price-1-x-currencyContainer--summary"><span class="vtex-product-price-1-x-currencyCode vtex-product-price-1-x-currencyCode--summary">R$</span><span class="vtex-product-price-1-x-currencyLiteral vtex-product-price-1-x-currencyLiteral--summary">&nbsp;</span><span class="vtex-product-price-1-x-currencyInteger vtex-product-price-1-x-currencyInteger--summary">{{produto.parcelas.real}}</span> <span class="vtex-product-price-1-x-currencyDecimal vtex-product-price-1-x-currencyDecimal--summary">,</span><span class="vtex-product-price-1-x-currencyFraction vtex-product-price-1-x-currencyFraction--summary">{{produto.parcelas.centavo}}</span> </span> </span> s/ juros no cartão de crédito</span> <div class="lebiscuit-le-component-0-x-quantity__container"> <div class="lebiscuit-le-component-0-x-quantity__button"><button tabindex="0" class="vtex-button bw1 ba fw5 v-mid relative pa0 lh-solid br2 min-h-regular t-action bg-action-primary b--action-primary c-on-action-primary hover-bg-action-primary hover-b--action-primary hover-c-on-action-primary pointer w-100 " type="button"> <div class="vtex-button__label flex items-center justify-center h-100 ph6 w-100 border-box " style="padding-top: 0.25em; padding-bottom: 0.32em;"> <div class="vtex-add-to-cart-button-0-x-buttonDataContainer flex justify-center"> <span class="vtex-add-to-cart-button-0-x-buttonText">Adicionar à sacola</span> </div></div></button></div></div></article> </a></section> </div></div>`
    })
})();


(()=>{
    Vue.component('carrossel-produtos', {
        name: 'carrossel-produtos',
        mounted() {
            new Splide(this.$el.querySelector('.splide'), {
                type: "loop",
                perPage: 5,
                perMove: 5,
                pagination: true,
                fixedWidth: '240px',
                classes: {
                    arrows: "splide__arrows",
                    arrow: "splide__arrow",
                    prev: "splide__arrow--prev",
                    next: "splide__arrow--next",
                },
            }).mount();

            $(this.$el.querySelector('.splide__pagination')).addClass('slick-dots');
        },
        template: `<div class="smarthint vtex-flex-layout-0-x-flexColChild pb0" style="height: 100%; margin-bottom: 30px;">
        <div class="vtex-flex-layout-0-x-flexRow">
            <div class="flex mt0 mb0 pt0 pb0    justify-start  vtex-flex-layout-0-x-flexRowContent items-stretch w-100">
                <div class="pr0 items-stretch vtex-flex-layout-0-x-stretchChildrenWidth   flex" style="width: 100%;">
                    <section aria-label="slider"
                        class="splide w-100 flex items-center relative vtex-slider-layout-0-x-sliderLayoutContainer vtex-slider-layout-0-x-sliderLayoutContainer--shelf-desk">
                        <div
                            class="splide__track w-100 vtex-slider-layout-0-x-sliderTrackContainer vtex-slider-layout-0-x-sliderTrackContainer--shelf-desk overflow-hidden">
                            <div data-testid="slider-track"
                                class="splide__list vtex-slider-layout-0-x-sliderTrack vtex-slider-layout-0-x-sliderTrack--shelf-desk flex justify-around relative pa0 ma0"
                                aria-atomic="false" aria-live="polite"
                                style="transform: translate3d(-25%, 0px, 0px); width: 400%;">
    
                                <slot>
                                    <!-- PRODUTOS AQUI -->
                                </slot>
    
                            </div>
                        </div>
    
                        <div class="splide__arrows">
                            <button
                                class="splide__arrow splide__arrow--prev vtex-slider-layout-0-x-sliderLeftArrow vtex-slider-layout-0-x-sliderLeftArrow--carousel left-0 vtex-slider-layout-0-x-sliderArrows vtex-slider-layout-0-x-sliderArrows--carousel absolute transparent ma2 flex items-center justify-center bn outline-0 pointer"
                                aria-controls="slider-items" aria-label="Previous Slide"
                                style="background: transparent;">
                                <svg fill="none"
                                    width="12" height="12" viewBox="0 0 16 16"
                                    class=" vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--carousel"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    style="width: 12px;">
                                    <use href="#nav-thin-caret--left"
                                        xlink:href="#nav-thin-caret--left">
                                    </use>
                                </svg>
                            </button>
                        
                            <button
                                class="splide__arrow splide__arrow--next vtex-slider-layout-0-x-sliderRightArrow vtex-slider-layout-0-x-sliderRightArrow--carousel right-0 vtex-slider-layout-0-x-sliderArrows vtex-slider-layout-0-x-sliderArrows--carousel absolute transparent ma2 flex items-center justify-center bn outline-0 pointer"
                                aria-controls="slider-items" aria-label="Next Slide"
                                style="background: transparent;"><svg fill="none"
                                    width="12" height="12" viewBox="0 0 16 16"
                                    class=" vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--carousel"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    style="width: 12px;">
                                    <use href="#nav-thin-caret--right"
                                        xlink:href="#nav-thin-caret--right">
                                    </use>
                                </svg>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>`
    })
})()