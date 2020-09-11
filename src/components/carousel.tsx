import React, { useState, useCallback, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { useEmblaCarousel } from 'embla-carousel/react';
import CarouselContainer from './carousel-container';
import CarouselViewport from './carousel-viewport';
import CarouselSlide from './carousel-slide';
import CarouselButton from './carousel-button';

const Carousel: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { name: { regex: "/studio-[0-9]+/" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const [viewportRef, embla] = useEmblaCarousel();
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  const images: any[] = data.images.edges.map(
    ({ node }: any) => node.childImageSharp.fluid
  );

  return (
    <div
      css={css`
        position: relative;
        padding: 2rem 0;
      `}
    >
      <CarouselViewport ref={viewportRef}>
        <CarouselContainer>
          {images.map((fluid: any, index) => (
            <CarouselSlide key={index}>
              <Image
                fluid={fluid}
                draggable={false}
                style={{ height: '100%', borderRadius: '1rem' }}
              />
            </CarouselSlide>
          ))}
        </CarouselContainer>
      </CarouselViewport>
      <CarouselButton
        direction="prev"
        onClick={scrollPrev}
        enabled={prevBtnEnabled}
      />
      <CarouselButton
        direction="next"
        onClick={scrollNext}
        enabled={nextBtnEnabled}
      />
    </div>
  );
};

export default Carousel;
