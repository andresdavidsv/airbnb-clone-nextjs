'use client';
import Image from 'next/image';
import React from 'react';

interface Props {}

export const Avatar = (props: Props) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};
