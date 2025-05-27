import StockCard from '@/components/StockCard';
import { stockSumary } from '@/constants';
import LineGraph from './LineGraph';

const StockSummarySection = () => {
  return (
    <section className="flex flex-col w-full gap-16 min-h-screen px-4 md:px-10 py-10">
      <p className="text-center font-semibold text-xl md:text-2xl">
        Stock Summary
      </p>

      {/* Responsive Grid for Stock Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {stockSumary.map(({ id, path, title, title2, counts }) => (
          <StockCard
            key={id}
            path={path}
            title={title}
            title2={title2}
            counts={counts}
          />
        ))}
      </div>

      {/* Sales Rate & Intervals Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto w-full px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-semibold text-black mb-2 text-lg">Sales Rate</h2>
          <p className="text-black/80 text-sm font-medium shadow-sm shadow-black/50 bg-white px-4 py-2 rounded">
            Most sold Vs Least Sold
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="font-semibold text-black mb-2 text-lg">Intervals</h2>
          <div className="flex gap-2 flex-wrap justify-center">
            <p className="text-black/80 text-sm font-medium shadow-sm shadow-black/50 bg-[#f1d3ff] px-4 py-2 rounded">
              DD/MM/YY
            </p>
            <span className="text-sm">To</span>
            <p className="text-black/80 text-sm font-medium shadow-sm shadow-black/50 bg-[#f1d3ff] px-4 py-2 rounded">
              DD/MM/YY
            </p>
          </div>
        </div>
      </div>

      {/* Line Graph */}
      <div className="flex justify-center items-center max-w-7xl mx-auto w-full px-4">
        <LineGraph />
      </div>
    </section>
  );
};

export default StockSummarySection;
