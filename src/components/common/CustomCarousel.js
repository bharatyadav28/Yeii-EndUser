import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CustomCarousel = ({ title, className, children }) => {
  return (
    <div className={"bg-[var(--light-gray)] py-5 rounded-3xl " + className}>
      <Carousel
        opts={{
          slidesToScroll: "1",
        }}
      >
        <h2 className="text-lg font-semibold mb-4 ml-5">{title}</h2>
        <CarouselPrevious className="absolute top-3 -left-50 right-14" />
        <CarouselNext className="absolute top-3 right-5" />
        <CarouselContent className="mx-5 gap-5">{children}</CarouselContent>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
