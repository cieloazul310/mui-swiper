/* eslint react/jsx-props-no-spreading: off */
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { type Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Swiper Basic Demo',
  component: Swiper,
} as ComponentMeta<typeof Swiper>;

function CommonContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ border: 1, borderColor: 'divider', my: 2 }}>{children}</Box>
  );
}

export const Basic: ComponentStory<typeof Swiper> = () => (
  <Container>
    <CommonContainer>
      <Swiper>
        <SwiperSlide>
          <p>Slide 0</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Slide 1</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Slide 2</p>
        </SwiperSlide>
      </Swiper>
    </CommonContainer>
  </Container>
);

export const WithState: ComponentStory<typeof Swiper> = () => {
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
            <p>Slide 0</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Slide 1</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Slide 2</p>
          </SwiperSlide>
        </Swiper>
      </CommonContainer>
    </Container>
  );
};

export const HandleOutside: ComponentStory<typeof Swiper> = () => {
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
            <p>Slide 0</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Slide 1</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Slide 2</p>
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

function ButtonsInsideSwiper() {
  const swiper = useSwiper();
  const [value, setValue] = React.useState(0);
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

export const HandleInside: ComponentStory<typeof Swiper> = () => (
  <Container>
    <CommonContainer>
      <Swiper>
        <SwiperSlide>
          <p>Slide 0</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Slide 1</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Slide 2</p>
        </SwiperSlide>
        <ButtonsInsideSwiper />
      </Swiper>
    </CommonContainer>
  </Container>
);
