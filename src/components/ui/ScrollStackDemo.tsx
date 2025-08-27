'use client';

import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

export const ScrollStackDemo = () => {
  return (
    <div className="h-screen w-full">
      <ScrollStack>
        <ScrollStackItem>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Card 1</h2>
            <p className="text-lg">This is the first card in the stack</p>
          </div>
        </ScrollStackItem>
        
        <ScrollStackItem>
          <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Card 2</h2>
            <p className="text-lg">This is the second card in the stack</p>
          </div>
        </ScrollStackItem>
        
        <ScrollStackItem>
          <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Card 3</h2>
            <p className="text-lg">This is the third card in the stack</p>
          </div>
        </ScrollStackItem>
        
        <ScrollStackItem>
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Card 4</h2>
            <p className="text-lg">This is the fourth card in the stack</p>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
};
