'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SuccessModalProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ message, isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <h2 className="text-xl font-semibold text-center text-green-600 dark:text-green-400">
          Success
        </h2>
        <p className="mt-2 text-center text-gray-700 dark:text-gray-300">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
