/* eslint react/jsx-props-no-spreading: off */
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { type Swiper as SwiperCore, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const meta: Meta<typeof Swiper> = {
  title: 'Example/Swiper Basic Demo',
  component: Swiper,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Swiper>;

function CommonContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ border: 1, borderColor: 'divider', my: 2 }}>{children}</Box>
  );
}

function SlidePane({ children }: { children: React.ReactNode }) {
  return (
    <Box minHeight={240} px={4} py={2}>
      {children}
    </Box>
  );
}

export const Basic: Story = {
  render: () => (
    <Container>
      <CommonContainer>
        <Swiper>
          <SwiperSlide>
            <SlidePane>Slide 0</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 1</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 2</SlidePane>
          </SwiperSlide>
        </Swiper>
      </CommonContainer>
    </Container>
  ),
};

const WithStateWithHooks = () => {
  const [slide, setSlide] = React.useState(0);
  const onSlideChange = (currentSwiper: SwiperCore) => {
    setSlide(currentSwiper.activeIndex);
  };

  return (
    <Container>
      <p>Current Slide is {slide}</p>
      <CommonContainer>
        <Swiper onSlideChange={onSlideChange}>
          <SwiperSlide>
            <SlidePane>Slide 0</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 1</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 2</SlidePane>
          </SwiperSlide>
        </Swiper>
      </CommonContainer>
    </Container>
  );
};

export const WithState: Story = {
  render: () => <WithStateWithHooks />,
};

const HandleOutsideWithHooks = () => {
  const [slide, setSlide] = React.useState(0);
  const [swiper, setSwiper] = React.useState<SwiperCore | null>(null);

  const onSwiper = (currentSwiper: SwiperCore) => {
    setSwiper(currentSwiper);
  };
  const onSlideChange = (currentSwiper: SwiperCore) => {
    setSlide(currentSwiper.activeIndex);
  };
  const onButtonClick = (index: number) => () => {
    setSlide(index);
    swiper?.slideTo(index);
  };

  return (
    <Container>
      <p>Current Slide is {slide}</p>
      <CommonContainer>
        <Swiper onSwiper={onSwiper} onSlideChange={onSlideChange}>
          <SwiperSlide>
            <SlidePane>Slide 0</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 1</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 2</SlidePane>
          </SwiperSlide>
        </Swiper>
      </CommonContainer>
      <ButtonGroup>
        {Array.from({ length: 3 }).map((_, index) => (
          <Button
            // eslint-disable-next-line react/no-array-index-key
            key={index.toString()}
            disabled={slide === index}
            onClick={onButtonClick(index)}
          >
            Slide {index}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export const HandleOutside: Story = {
  render: () => <HandleOutsideWithHooks />,
};

function ButtonsInsideSwiper({
  value,
  setValue,
}: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  const swiper = useSwiper();
  const onButtonClick = (index: number) => () => {
    setValue(index);
    swiper.slideTo(index);
  };

  return (
    <ButtonGroup>
      {Array.from({ length: 3 }).map((_, index) => (
        <Button
          // eslint-disable-next-line react/no-array-index-key
          key={index.toString()}
          disabled={value === index}
          onClick={onButtonClick(index)}
        >
          Slide {index}
        </Button>
      ))}
    </ButtonGroup>
  );
}

const HandleInsideWithHooks = () => {
  const [value, setValue] = React.useState(0);
  const onSlideChange = (currentSwiper: SwiperCore) => {
    setValue(currentSwiper.activeIndex);
  };

  return (
    <Container>
      <CommonContainer>
        <Swiper onSlideChange={onSlideChange}>
          <SwiperSlide>
            <SlidePane>Slide 0</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 1</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 2</SlidePane>
          </SwiperSlide>
          <ButtonsInsideSwiper value={value} setValue={setValue} />
        </Swiper>
      </CommonContainer>
    </Container>
  );
};

export const HandleInside: Story = {
  render: () => <HandleInsideWithHooks />,
};

export const WithNavigation: Story = {
  render: () => (
    <Container>
      <CommonContainer>
        <Swiper modules={[Navigation]} navigation>
          <SwiperSlide>
            <SlidePane>Slide 0</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 1</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 2</SlidePane>
          </SwiperSlide>
        </Swiper>
      </CommonContainer>
    </Container>
  ),
};

export const WithPagination: Story = {
  render: () => (
    <Container>
      <CommonContainer>
        <Swiper modules={[Pagination]} pagination>
          <SwiperSlide>
            <SlidePane>Slide 0</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 1</SlidePane>
          </SwiperSlide>
          <SwiperSlide>
            <SlidePane>Slide 2</SlidePane>
          </SwiperSlide>
        </Swiper>
      </CommonContainer>
    </Container>
  ),
};
