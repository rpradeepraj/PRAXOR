"use client"

import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  loading?: "lazy" | "eager"
  fallbackSrc?: string
}

export function ImageWithFallback({ src, alt, className, loading = "lazy", fallbackSrc }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      if (fallbackSrc) {
        setImgSrc(fallbackSrc)
      } else {
        // Generate a more descriptive placeholder URL
        const encodedAlt = encodeURIComponent(alt)
        const dimensions = className?.includes("h-48")
          ? "height=200&width=400"
          : className?.includes("h-32")
            ? "height=150&width=300"
            : "height=400&width=600"
        setImgSrc(`/placeholder.svg?${dimensions}&text=${encodedAlt}`)
      }
    }
  }


  console.log(imgSrc,"imgSrc")

  return (
    <img
      src={imgSrc.src || "/placeholder.svg"}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      onLoad={() => setHasError(false)}
    />
  )
}
