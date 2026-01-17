
import React from 'react';

export interface ClientInfo {
  name: string;
  segment: string;
  city: string;
  address: string;
  instagram: string;
  email: string;
}

export interface PlanItem {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
  highlight?: string;
}

// Fix: Import React to provide the React namespace for ReactNode
export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}
