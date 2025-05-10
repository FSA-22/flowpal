'use client';

import { useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PaperclipIcon } from 'lucide-react';

export default function InvoiceInputComponent() {
  const [customerName, setCustomerName] = useState('');
  const [date, setDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState<File | null>(null);
  const receiptRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (receiptRef.current) {
      const html2pdf = (await import('html2pdf.js')).default;
      html2pdf().from(receiptRef.current).save('receipt.pdf');
    }
  };

  const handlePrint = () => {
    if (receiptRef.current) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(receiptRef.current.innerHTML);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const handleSendEmail = () => {
    alert('Email functionality not implemented yet.');
  };

  return (
    <div className="bg-white max-w-6xl mx-auto flex flex-col mb-8">
      <div className="p-6 w-full mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Create a Receipt with Ease</h1>
          <p className="text-gray-600">
            Simplify your business transactions by generating digital receipts
            in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 w-full">
          <h2 className="font-semibold text-lg">Generate New Receipt</h2>

          <div className="space-y-2">
            <Label>Customer Name / Email</Label>
            <Input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="py-6 px border-1 border-black"
            />
          </div>

          <div className="space-y-2">
            <Label>Date</Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="py-6 border-1 border-black text-white"
            />
          </div>

          <div className="space-y-2">
            <Label>Payment Method</Label>
            <Input
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="py-6 border-1 border-black"
            />
          </div>

          <div className="space-y-2">
            <Label>Amount</Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="py-6 border-1 border-black"
            />
          </div>

          <div className="space-y-2">
            <Label>Description of Purchase</Label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="py-6 border-1 border-black"
            />
          </div>

          <Label>Upload Business Logo</Label>
          <div className="relative flex items-center gap-1">
            <PaperclipIcon className="absolute top-4 right-3 z-10  w-5 h-5" />
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setLogo(e.target.files?.[0] || null)}
              className="text-white border-1 border-black py-6"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-between">
          <Button
            className="bg-purple-600 text-white w-[18%] py-6 font-normal"
            onClick={() => alert('Preview not implemented')}
          >
            Receipt Preview
          </Button>
          <Button
            className="bg-purple-600 text-white w-[18%] py-6 font-normal"
            onClick={handleDownloadPDF}
          >
            Download PDF
          </Button>
          <Button
            className="bg-purple-600 text-white w-[18%] py-6 font-normal"
            onClick={handleSendEmail}
          >
            Send Via Email
          </Button>
          <Button
            className="bg-purple-600 text-white w-[18%] py-6 font-normal"
            onClick={handlePrint}
          >
            Print Receipt
          </Button>
        </div>

        {/* Hidden receipt content for PDF/Print */}
        <div ref={receiptRef} className="hidden">
          <div>
            <h2>Receipt</h2>
            <p>
              <strong>Customer:</strong> {customerName}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Payment Method:</strong> {paymentMethod}
            </p>
            <p>
              <strong>Amount:</strong> ₦{amount}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
            {logo && (
              <img
                src={URL.createObjectURL(logo)}
                alt="Logo"
                className="w-20 h-20 mt-4"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
