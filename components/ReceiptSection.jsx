'use client';

import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const receipts = [
  {
    id: '#INV-1001',
    name: 'John Doe',
    date: 'March 12 2025',
    amount: '25,000.00',
    status: 'Paid',
  },
  {
    id: '#INV-1002',
    name: 'Jane Smith',
    date: 'March 12 2025',
    amount: '15,000.00',
    status: 'Paid',
  },
  {
    id: '#INV-1003',
    name: 'Alex Cater',
    date: 'Mar 8 2025',
    amount: '9,500.00',
    status: 'Pending',
  },
];

export default function ReceiptSection() {
  const exportRef = useRef < HTMLDivElement > null;

  const handleExport = async () => {
    if (!exportRef.current) return;

    const canvas = await html2canvas(exportRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('receipts.pdf');
  };

  return (
    <section
      className="bg-[#f1d3ff] w-full mx-auto py-8 rounded-b-2xl space-y-6"
      ref={() => exportRef}
    >
      <div className="max-w-6xl mx-auto mt-4 space-y-6 rounded-b-3xl">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-3xl font-bold">
            Find Any Receipt in Just a Few Clicks
          </h1>
          <p className="text-gray-700">
            Easily access your past receipts, filter by date or status, and
            download or resend with ease.
          </p>
        </div>

        <div className="flex max-w-xl mx-auto justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500" />
            <span>Paid</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-400" />
            <span>Pending</span>
          </div>
        </div>

        <div className="grid grid-cols-4 font-semibold pb-2">
          <span>Receipt ID</span>
          <span>Customer Name</span>
          <span>Date</span>
          <span>Amount</span>
        </div>

        {receipts.map((receipt, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center mb-2 shadow-sm shadow-black/30 bg-white py-6 px-4 rounded-lg"
          >
            <span
              className={`flex items-center gap-2 ${
                receipt.status === 'Paid' ? 'text-red-600' : 'text-yellow-600'
              }`}
            >
              <div
                className={`w-3 h-3 ${
                  receipt.status === 'Paid' ? 'bg-red-500' : 'bg-yellow-400'
                }`}
              />
              {receipt.id}
            </span>
            <span>{receipt.name}</span>
            <span>{receipt.date}</span>
            <span>{receipt.amount}</span>
          </div>
        ))}

        <div className="flex justify-center  pt-6">
          <Button
            className="bg-purple-600 font-normal text-white hover:bg-purple-700 w-full py-6 max-w-xs"
            onClick={handleExport}
          >
            Export as PDF
          </Button>
        </div>
      </div>
    </section>
  );
}
