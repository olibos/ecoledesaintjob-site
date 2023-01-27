import {
  useEffect,
  useState,
} from 'react';

import classnames from 'classnames';

import { ChevronDoubleUp } from '@/icons';

import Styles from './BackToTop.module.scss';

export function BackToTop()
{
    const [isVisible, setVisible] = useState(false);
    function handleClick()
    {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    useEffect(() =>
    {
        function handler(e: Event)
        {
            setVisible(window.scrollY > 100);
        }

        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    })


    return (
        <button className={classnames('btn btn-primary p-3', Styles["back-to-top"], isVisible && Styles.shown)} onClick={handleClick}>
            <ChevronDoubleUp width={24} color="#fff" />
        </button>
    );
}