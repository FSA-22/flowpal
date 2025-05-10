import React from 'react';

function FileInput({ setLogo }: { setLogo: (file: File | null) => void }) {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogo(e.target.files?.[0] || null);
  };

  return (
    <div className="flex items-center border border-black px-4 py-2 rounded-md w-fit">
      <span className="text-sm text-gray-600">Upload Business Logo</span>
      <button
        type="button"
        onClick={handleClick}
        className="ml-4 hover:text-purple-600 transition-colors"
      ></button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden border-1 border-black"
      />
    </div>
  );
}
