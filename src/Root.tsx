import { Composition } from "remotion";
import { BubbleSortAnimation } from './BubbleSortAnimation';
import { ANIMATION_STEPS } from './bubbleSort';

export const RemotionRoot: React.FC = () => {
  // Each step takes 1 second (30 frames)
  const durationInFrames = ANIMATION_STEPS.length * 30;

  return (
    <>
    <Composition
      id="BubbleSort"
      component={BubbleSortAnimation}
      durationInFrames={durationInFrames}
      fps={30}
      width={1920}
      height={1080}
    />
    </>
  );
};
