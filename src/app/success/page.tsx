'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // cleanup
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      <p className="mt-4 text-lg text-white/70">Your $5 donation was received. Thank you so much for your support! 🙌</p>
      <p className="mt-2 text-sm text-gray-500">Redirecting to the homepage in 5 seconds...</p>
    </div>
  );
}
