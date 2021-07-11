import { Meta, Story } from "@storybook/react";

import { Image } from "./Image";
import { ImageProps } from "./Image.type";

export default {
  title: "UI/Image",
  component: Image
} as Meta;

const Template: Story<ImageProps> = () => (
  <>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http//localhost:3001/iamge.jpg"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/city"
        loadThreshold={0.65}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/people"
        loadThreshold={1}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/transport"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/animals"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/sports/6"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/food"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/nature"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/business"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/nightlife"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/sports"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/cats"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/fashion"
        loadThreshold={0.5}
      />
    </div>
    <div>
      <Image
        loadWidth={300}
        loadHeight={300}
        src="http://lorempixel.com/300/300/technics"
        loadThreshold={0.5}
      />
    </div>
  </>
);

const Primary = Template.bind({});

export { Primary };
