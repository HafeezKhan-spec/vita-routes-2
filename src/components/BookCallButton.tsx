import React from 'react';
import AnimatedButton from '@/components/AnimatedButton';
import { useContactModal } from '@/components/ContactModalProvider';

type Props = {
  className?: string;
};

// Shared "BOOK A CALL" button using the same animation and theme as header.
// Always opens the global contact modal.
const BookCallButton: React.FC<Props> = ({ className = '' }) => {
  const { openContactModal } = useContactModal();
  return <AnimatedButton onClick={openContactModal} className={className} />;
};

export default BookCallButton;