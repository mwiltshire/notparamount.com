import Image from 'next/image';
import { Box } from '../Box/Box';
import { Viewport } from './Viewport';
import { Container } from './Container';
import { Slide } from './Slide';
import { Button } from './Button';
import { useEmbla } from '../../hooks/useEmbla';

import { images } from './images';

export function ImageCarousel() {
  const { emblaRef, scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useEmbla();
  return (
    <Box sx={{ position: 'relative' }}>
      <Viewport ref={emblaRef}>
        <Container>
          {images.map((image, index) => (
            <Slide key={image.src}>
              <Image
                src={image}
                alt={`Studio image ${index}`}
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                style={{ height: '100%', borderRadius: '1rem' }}
                fill
                sizes="100vw, (min-width: 64em) 66vw"
              />
            </Slide>
          ))}
        </Container>
      </Viewport>
      <Button position="left" onClick={scrollPrev} disabled={!canScrollPrev} />
      <Button position="right" onClick={scrollNext} disabled={!canScrollNext} />
    </Box>
  );
}
