"use client";

import { AnimationProps, TargetAndTransition, VariantLabels, motion } from 'framer-motion';

export const Reveal = ({ children, initial, whileInView }) => {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
        > {children}</ motion.div>
    );
};