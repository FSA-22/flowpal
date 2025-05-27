'use client';

import dynamic from 'next/dynamic';

const ReceiptSection = dynamic(() => import('./ReceiptSection'), {
  ssr: false,
});

export default function ClientOnlyReceipt() {
  return <ReceiptSection />;
}
