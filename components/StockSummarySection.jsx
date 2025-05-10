import StockCard from '@/components/StockCard';
import { stockSumary } from '@/constants';
import LineGraph from './LineGraph';

const StockSummarySection = () => {
  return (
    <section className="flex flex-col mx-auto w-6xl gap-20 min-h-screen p-10">
      <p className="flex-center font-semibold text-2xl mb-15">Stock Summary</p>

      <div className="flex justify-between mx-auto gap-20 max-w-6xl h-full">
        {stockSumary.map(({ id, path, title, title2, counts }) => (
          <div key={id}>
            <StockCard
              path={path}
              title={title}
              title2={title2}
              counts={counts}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between max-w-6xl px-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-black mb-2">Sales Rate</h2>
          <p className="text-black/80 text-[12px] font-medium shadow-sm shadow-black/50 bg-white p-2">
            Most sold Vs Least Sold
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-black mb-2">Intervals</h2>
          <div className="flex gap-4">
            <p className="text-black/80 text-[12px] font-medium shadow-sm shadow-black/50 bg-[#f1d3ff] p-2">
              DD/MM/YY
            </p>
            <span>To</span>
            <p className="text-black/80 text-[12px] font-medium shadow-sm shadow-black/50 bg-[#f1d3ff] p-2">
              DD/MM/YY
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center max-w-6xl px-10">
        <LineGraph />
      </div>
    </section>
  );
};

export default StockSummarySection;
