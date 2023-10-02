import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const CarouselGalleryImages = () => {
    const items = [
        {
            image: '/assets/gallery/jpg/grid-carousel/dm-place-gallery-1.jpg',
            alt: 'Galeria de Fotos de DinsMallorca'
        },
        {
            image: '/assets/gallery/jpg/grid-carousel/dm-place-gallery-2.jpg',
            alt: 'Galeria de Fotos de DinsMallorca'
        },
        {
            image: '/assets/gallery/jpg/grid-carousel/dm-place-gallery-3.jpg',
            alt: 'Galeria de Fotos de DinsMallorca'
        },
        {
            image: '/assets/gallery/jpg/grid-carousel/dm-place-gallery-4.jpg',
            alt: 'Galeria de Fotos de DinsMallorca'
        },
        {
            image: '/assets/gallery/jpg/grid-carousel/dm-place-gallery-5.jpg',
            alt: 'Galeria de Fotos de DinsMallorca'
        }
    ];
    const { t } = useTranslation('homeCarouselSection');
    return (
        <section className="w-[98%] align-middle">
            <div>
                <h1 className="dm-black-title">{t('title')}</h1>
            </div>
            <div>
                <Carousel responsive={responsive} infinite={true}>
                    <div className="p-2">
                        <div className="flex items-center justify-center">
                            <Image
                                src={t('image1.url')}
                                alt={t('image1.alt')}
                                height={400}
                                width={400}
                                className="rounded shadow opacity-80 object-cover"
                            />
                        </div>
                        <div className="m-4 flex items-center justify-center">
                            <h3 className="dm-black-text bold">
                                {t('image1.description')}
                            </h3>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="flex items-center justify-center">
                            <Image
                                src={t('image2.url')}
                                alt={t('image2.alt')}
                                height={400}
                                width={400}
                                className="rounded shadow opacity-80"
                            />
                        </div>
                        <div className="m-4 flex items-center justify-center">
                            <h3 className="dm-black-text bold">
                                {t('image2.description')}
                            </h3>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="flex items-center justify-center">
                            <Image
                                src={t('image3.url')}
                                alt={t('image3.alt')}
                                height={400}
                                width={400}
                                className="rounded shadow opacity-80"
                            />
                        </div>
                        <div className="m-4 flex items-center justify-center">
                            <h3 className="dm-black-text bold">
                                {t('image3.description')}
                            </h3>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="flex items-center justify-center">
                            <Image
                                src={t('image4.url')}
                                alt={t('image4.alt')}
                                height={400}
                                width={400}
                                className="rounded shadow opacity-80"
                            />
                        </div>
                        <div className="m-4 flex items-center justify-center">
                            <h3 className="dm-black-text bold">
                                {t('image4.description')}
                            </h3>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="flex items-center justify-center">
                            <Image
                                src={t('image5.url')}
                                alt={t('image5.alt')}
                                height={400}
                                width={400}
                                className="rounded shadow opacity-80"
                            />
                        </div>
                        <div className="m-4 flex items-center justify-center">
                            <h3 className="dm-black-text bold">
                                {t('image5.description')}
                            </h3>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default CarouselGalleryImages;
