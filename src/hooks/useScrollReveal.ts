import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe all .reveal elements within the ref
    const revealElements = element.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    // Also observe the element itself if it has the class
    if (element.classList.contains('reveal')) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1'
          element.style.transform = 'translateY(0)'
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
