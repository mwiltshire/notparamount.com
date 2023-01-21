/** @jsxImportSource theme-ui */
import { AspectRatio } from 'theme-ui';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { Modal } from '../Modal/Modal';

interface VideoModalProps {
  src: string;
  isOpen?: boolean;
  onClose: () => void;
}

export function VideoModal({ src, isOpen = false, onClose }: VideoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Box sx={{ width: ['100vw', '100vw', '75vw'] }}>
        <Container>
          <AspectRatio ratio={16 / 9}>
            <iframe
              sx={{ height: '100%', width: '100%' }}
              src={src}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </Container>
      </Box>
    </Modal>
  );
}
