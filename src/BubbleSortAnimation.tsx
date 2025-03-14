import { useCurrentFrame, useVideoConfig } from 'remotion';
import { INITIAL_ARRAY, ANIMATION_STEPS } from './bubbleSort';

export const BubbleSortAnimation = () => {
  const frame = useCurrentFrame(); // Frame atual do vídeo
  const { fps } = useVideoConfig(); // Taxa de quadros

  // Calcula o índice da etapa atual (1 segundo por etapa)
  const stepIndex = Math.min(Math.floor(frame / fps), ANIMATION_STEPS.length - 1);
  const currentStep = ANIMATION_STEPS[stepIndex];

  // Bar styles
  const barWidth = 80;
  const barSpacing = 20;
  const maxHeight = 500;

  // Colors
  const colors = {
    background: '#1a1a1a',
    header: '#ffffff',
    bar: {
      default: '#4CAF50',
      comparing: '#FFC107',
      swapping: '#F44336'
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.background,
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Header showing original array */}
      <div
        style={{
          color: colors.header,
          fontSize: '32px',
          marginBottom: '60px',
          textAlign: 'center',
          width: '100%',
          padding: '20px',
          borderBottom: '2px solid rgba(255,255,255,0.1)',
        }}
      >
        Original Array: [{INITIAL_ARRAY.join(', ')}]
      </div>

      {/* Bars container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: '600px',
          width: '100%',
        }}
      >
        {currentStep.array.map((value: number, index: number) => {
          const isComparing =
            currentStep.type === 'compare' && currentStep.indices.includes(index);
          const isSwapping =
            currentStep.type === 'swap' && currentStep.indices.includes(index);

          const barColor = isSwapping 
            ? colors.bar.swapping 
            : isComparing 
              ? colors.bar.comparing 
              : colors.bar.default;

          return (
            <div
              key={index}
              style={{
                width: `${barWidth}px`,
                height: `${value * (maxHeight / Math.max(...INITIAL_ARRAY))}px`,
                backgroundColor: barColor,
                margin: `0 ${barSpacing}px`,
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* Value label */}
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  color: colors.header,
                  fontSize: '20px',
                }}
              >
                {value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
