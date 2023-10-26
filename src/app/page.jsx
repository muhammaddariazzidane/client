import ModeToggle from '@/components/elements/button/ModeToggle';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function page() {
  return (
    <div className="p-12 ">
      <h1 className="text-red-600 text-6xl">hello</h1>
      <Button>halo</Button>
      <div className="m-5">
        <ModeToggle />
      </div>
    </div>
  );
}
