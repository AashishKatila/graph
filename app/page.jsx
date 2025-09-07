import ChartComponent from "../components/ChartComponent";

export default function App() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="lg:mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 lg:mb-2">
            Energy Consumption Analysis
          </h2>
        </div>

        <ChartComponent />
      </div>
    </>
  );
}
