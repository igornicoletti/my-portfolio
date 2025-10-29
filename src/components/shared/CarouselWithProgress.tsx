import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Progress } from '@/components/ui/progress'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useRef, useState } from 'react'

export const CarouselWithProgress = () => {
  const AUTOPLAY_DELAY = 3000

  const autoplayPlugin = useRef(
    Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false })
  )

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const progressValue = (current / count) * 100

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1)
    }

    api.on('select', updateCurrent)

    return () => {
      api.off('select', updateCurrent)
    }

  }, [api])

  const handleMouseEnter = () => {
    autoplayPlugin.current.stop()
  }

  const handleMouseLeave = () => {
    autoplayPlugin.current.play()
  }

  return (
    <div className='mx-auto max-w-xs py-4'>
      <Carousel
        setApi={setApi}
        className='w-full max-w-xs'
        plugins={[autoplayPlugin.current]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className='flex aspect-video items-center justify-center p-6'>
                  <span className='text-4xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='top-[calc(100%+0.5rem)] translate-y-0 left-0' />
        <CarouselNext className='top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full' />
      </Carousel>
      <Progress value={progressValue} className='mt-6 w-24 ml-auto' />
    </div>
  )
}
