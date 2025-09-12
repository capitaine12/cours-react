// src/hooks/useAverageColor.js
import { useEffect, useState } from "react"
import { FastAverageColor } from "fast-average-color"

export function useAverageColor(imageUrl, delay = 300) {
    const [colors, setColors] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!imageUrl) return

        let timeoutId
        const fac = new FastAverageColor()

        // Si ça prend plus de 300ms → on montre le loader
        timeoutId = setTimeout(() => setLoading(true), delay)

        fac.getColorAsync(imageUrl)
            .then(color => {
                setColors({ accent: color.hex })
                setLoading(false)
                clearTimeout(timeoutId)
            })
            .catch(err => {
                console.error("AverageColor error:", err)
                setLoading(false)
                clearTimeout(timeoutId)
            })

        return () => clearTimeout(timeoutId)
    }, [imageUrl, delay])

    return { colors, loading }
}
