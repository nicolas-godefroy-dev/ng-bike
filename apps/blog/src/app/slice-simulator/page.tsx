'use client';

import { SliceZone } from '@prismicio/react';
import { SliceSimulator } from '@slicemachine/adapter-next/simulator';
import React from 'react';

import { components } from '@/slices';

const SliceSimulatorPage = () => {
  return <SliceSimulator sliceZone={(props) => <SliceZone {...props} components={components} />} />;
};

export default SliceSimulatorPage;
