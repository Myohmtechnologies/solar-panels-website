import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const electricityPriceData = [
  { year: 2010, price: 0.12, type: 'historical' },
  { year: 2012, price: 0.14, type: 'historical' },
  { year: 2014, price: 0.16, type: 'historical' },
  { year: 2016, price: 0.18, type: 'historical' },
  { year: 2018, price: 0.20, type: 'historical' },
  { year: 2020, price: 0.22, type: 'historical' },
  { year: 2022, price: 0.25, type: 'historical' },
  { year: 2024, price: 0.28, type: 'historical' },
  { year: 2026, price: 0.32, type: 'projected' },
  { year: 2028, price: 0.36, type: 'projected' },
  { year: 2030, price: 0.40, type: 'projected' },
];

const ElectricityPriceChart: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-black">
          Évolution du Prix de l&apos;Électricité
        </h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-FFDF64 rounded-full"></div>
            <span className="text-black/70 text-sm">Prix de l&apos;électricité</span>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={electricityPriceData}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(0,0,0,0.1)" 
            verticalFill={['rgba(255,223,100,0.05)', 'transparent']}
            fillOpacity={0.1}
          />
          <XAxis 
            dataKey="year" 
            tick={{ fill: 'black' }}
            axisLine={{ stroke: 'black' }}
          />
          <YAxis 
            label={{ 
              value: 'Prix (€/kWh)', 
              angle: -90, 
              position: 'insideLeft',
              fill: 'black'
            }} 
            tick={{ fill: 'black' }}
            axisLine={{ stroke: 'black' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #FFDF64',
              borderRadius: '12px'
            }}
            labelStyle={{ color: 'black', fontWeight: 'bold' }}
            formatter={(value: number, name: string, props: any) => [
              `${Number(value).toFixed(2)} €/kWh`, 
              props.payload.type === 'historical' ? 'Prix historique' : 'Projection'
            ]}
          />
          <ReferenceLine 
            x={2024} 
            stroke="#FFDF64" 
            strokeDasharray="3 3" 
            label={{
              position: 'insideTopRight', 
              value: 'Projection future', 
              fill: 'black'
            }} 
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#FFDF64"
            strokeWidth={3} 
            dot={{ 
              r: 6, 
              fill: '#FFDF64', 
              stroke: 'white', 
              strokeWidth: 2 
            }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <p className="text-center text-black/70 mt-6 italic">
        Prévision d&apos;une augmentation continue du prix de l&apos;électricité jusqu&apos;en 2030
      </p>
    </div>
  );
};

export default ElectricityPriceChart;
