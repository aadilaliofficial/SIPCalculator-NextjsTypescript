'use client';

import React, { useState } from 'react';

export default function Home() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [years, setYears] = useState<number>(10);
  const [annualReturn, setAnnualReturn] = useState<number>(12);

  const totalMonths = years * 12;
  const monthlyRate = annualReturn / 12 / 100;

  const futureValue =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) * (1 + monthlyRate)) /
    monthlyRate;

  const totalInvested = monthlyInvestment * totalMonths;
  const wealthGained = futureValue - totalInvested;

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/3191576/3191576-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Main Content */}
      <div className="relative z-10 max-w-md w-full bg-gradient-to-r from-slate-900 to-slate-700 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">SIP Calculator</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">
              Monthly Investment (₹)
            </label>
            <input
              type="number"
              value={monthlyInvestment === 0 ? '' : monthlyInvestment}
              onChange={(e) =>
                setMonthlyInvestment(e.target.value === '' ? 0 : Number(e.target.value))
              }
              className="mt-1 w-full bg-white border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700"
              min={0}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Investment Period (Years)
            </label>
            <input
              type="number"
              value={years === 0 ? '' : years}
              onChange={(e) => setYears(e.target.value === '' ? 0 : Number(e.target.value))}
              className="mt-1 w-full bg-white border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700"
              min={0}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              value={annualReturn === 0 ? '' : annualReturn}
              onChange={(e) =>
                setAnnualReturn(e.target.value === '' ? 0 : Number(e.target.value))
              }
              className="mt-1 w-full bg-white border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-700"
              min={0}
            />
          </div>
        </div>

        <div className="mt-6 rounded-xl p-4 text-center space-y-2 text-white boxx">
          <p>
            <strong>Total Invested:</strong> ₹{totalInvested.toLocaleString()}
          </p>
          <p>
            <strong>Wealth Gained:</strong> ₹{wealthGained.toLocaleString()}
          </p>
          <p>
            <strong>Maturity Amount:</strong> ₹{futureValue.toLocaleString()}
          </p>
        </div>
      </div>
    </main>
  );
}
