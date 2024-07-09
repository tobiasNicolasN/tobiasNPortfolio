import * as React from 'react';

export interface IEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  email,
  message,
}: IEmailTemplateProps) => (
  <div className="font-sans text-gray-800">
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-blue-600">Nuevo Mensaje Recibido</h1>
      </div>
      <div className="p-6 text-xl">
        <h2 className="text-xl font-semibold text-gray-700">De: {name}. ({email})</h2>
        <div className="mt-4">
          <h2 className="text-xl">{message}</h2>
        </div>
      </div>
    </div>
  </div>
);
