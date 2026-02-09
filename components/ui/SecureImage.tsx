"use client";

import Image, { ImageProps } from "next/image";

export default function SecureImage(props: ImageProps) {
    const { className, ...rest } = props;

    return (
        <Image
            {...rest}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`${className || ""} select-none pointer-events-none`}
        />
    );
}
