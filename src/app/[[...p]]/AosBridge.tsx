'use client';
import { useEffect } from 'react';

import AOS from 'aos';

export function AosBridge()
{
    useEffect(() => { AOS.init(); }, []);
    
    return null;
}