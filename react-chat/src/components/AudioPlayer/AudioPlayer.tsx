import { useEffect, useState } from 'react';

const AudioPlayer = ({ voiceBlob }: { voiceBlob: Blob }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    if (voiceBlob) {
      const url = URL.createObjectURL(voiceBlob);
      setAudioUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [voiceBlob]);

  if (!audioUrl) return null; 

  return (
    <audio controls style={{ width: '100%'}}>
      <source src={audioUrl} type={voiceBlob.type} />
      Ваш браузер не поддерживает воспроизведение аудио.
    </audio>
  );
};

export default AudioPlayer;