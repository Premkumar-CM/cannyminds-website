"use client";

import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export default function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Auto close after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 sm:p-12 max-w-md w-full mx-4 shadow-2xl transform transition-all animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce-in">
            <CheckCircleIcon sx={{ fontSize: 48, color: '#22c55e' }} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
          Message Sent Successfully!
        </h2>

        {/* Message */}
        <p className="text-center text-gray-600 mb-6">
          {message || "Thank you for contacting us. We'll get back to you within 24 hours."}
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-primary transition-colors shadow-md"
        >
          Close
        </button>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
}
