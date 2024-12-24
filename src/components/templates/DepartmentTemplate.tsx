'use client';

import React from 'react';
import Image from 'next/image';

type DepartmentTemplateProps = {
  department: {
    name: string;
    description?: string;
  };
};

const DepartmentTemplate: React.FC<DepartmentTemplateProps> = ({ department }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{department.name}</h1>
      {department.description && (
        <p className="text-gray-600 mb-6">{department.description}</p>
      )}
      <div className="relative h-64 w-full mb-6">
        <Image
          src="/images/placeholder-department.jpg"
          alt={`${department.name} landscape`}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default DepartmentTemplate;
