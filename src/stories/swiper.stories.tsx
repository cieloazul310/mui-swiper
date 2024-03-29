/* eslint react/jsx-props-no-spreading: off */
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { type Swiper as SwiperCore, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const meta: Meta<typeof Swiper> = {
  title: 'Example/Swiper',
  component: Swiper,
  tags: ['autodocs'],
};

export default meta;

type TabPanelProps = React.PropsWithChildren<{
  index: number;
  value: number;
}>;

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

type Story = StoryObj<typeof Swiper>;

const BasicWithHooks = () => {
  const [swiper, setSwiper] = React.useState<SwiperCore | null>(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    swiper?.slideTo(newValue);
  };
  const onSwiper = (currentSwiper: SwiperCore) => {
    const swiperInstance = currentSwiper;
    setSwiper(swiperInstance);
  };
  const onSlideChange = (currentSwiper: SwiperCore) => {
    setValue(currentSwiper.activeIndex);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 1 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Swiper
        simulateTouch={false}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
      >
        <SwiperSlide>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
        </SwiperSlide>
        <SwiperSlide>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </SwiperSlide>
        <SwiperSlide>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export const Basic: Story = {
  render: () => <BasicWithHooks />,
};


const BindKeyboardWithHooks = () => {
  const [swiper, setSwiper] = React.useState<SwiperCore | null>(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    swiper?.slideTo(newValue);
  };
  const onSwiper = (currentSwiper: SwiperCore) => {
    const swiperInstance = currentSwiper;
    setSwiper(swiperInstance);
  };
  const onSlideChange = (currentSwiper: SwiperCore) => {
    setValue(currentSwiper.activeIndex);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 1 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Swiper
        modules={[Keyboard]}
        keyboard={{
          enabled: true,
        }}
        simulateTouch={false}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
      >
        <SwiperSlide>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
        </SwiperSlide>
        <SwiperSlide>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </SwiperSlide>
        <SwiperSlide>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export const BindKeyboard: Story = {
  render: () => <BindKeyboardWithHooks />,
};
