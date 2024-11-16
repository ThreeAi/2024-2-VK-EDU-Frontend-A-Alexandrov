import React, { ChangeEvent, FormEvent, KeyboardEvent, useContext, useState } from 'react';
import AttachmentIcon from '@mui/icons-material/Attachment';
import PlaceIcon from '@mui/icons-material/Place';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import './ChatFooter.scss';
import { MessageInputContext } from '../../../contexts/MessageInputContext';
import AudioPlayer from '../../../components/AudioPlayer';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';

interface ChatFooterProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const ChatFooter = ({ handleSubmit } : ChatFooterProps) => {

  const { messageInput, setMessageInput } = useContext(MessageInputContext);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

  const startRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('Your browser does not support audio recording.');
      return;
    }
  
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
  
      recorder.ondataavailable = (event) => {
        setMessageInput({
          ...messageInput, 
          voice: event.data
        });
      };
  
      recorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.keyCode === 13 && !event.shiftKey) { 
      event.preventDefault();
      handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageFiles = Array.from(files).filter((file) =>
        file.type.startsWith('image/')
      );
  
      setMessageInput({
        ...messageInput, 
        voice: undefined,
        files: [...messageInput.files, ...imageFiles]
      });
    }
  };

  const handleSendGeolocation = () => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser.');
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
  
        const locationUrl = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  
        setMessageInput({
          ...messageInput,
          voice: undefined,
          text: locationUrl,
        });
      },
      (error) => {
        console.error('Error fetching geolocation:', error.message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight || '0', 10);
    const maxRows = 5;

    textarea.rows = 1; 
    const currentRows = Math.floor(textarea.scrollHeight / lineHeight); 

    if (currentRows < maxRows) {
      textarea.rows = currentRows; 
    } else {
      textarea.rows = maxRows;
      textarea.style.overflowY = 'auto';
    }

    setMessageInput({...messageInput, text: event.target.value});
  };

  return (
    <div className="chat-footer">
      <form className="form" onSubmit={handleSubmit} action="/">
        <div className='files'>
          {messageInput.files.map((file, index) => {
            return (
              <div key={index} className='file'>{`${(file as File).name}`}</div>
            );
          })
          }
        </div>
        {messageInput.voice ?
          <>
            <AudioPlayer voiceBlob={messageInput.voice as Blob}/> 
            
          </>:
          <textarea
            rows={1}
            wrap="soft"
            className="message-input"
            placeholder="Сообщение"
            value={messageInput.text ?? ''}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          ></textarea>
        }        
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
          id="fileInput"
        />
      </form>

      {messageInput.voice && 
      <button type="button" onClick={() => setMessageInput({...messageInput, voice: undefined})}>
        <CancelScheduleSendIcon className="material-symbols-outlined" />
      </button>
      } 

      <button type="button" onClick={handleSendGeolocation}>
        <PlaceIcon className='material-symbols-outlined'/>
      </button>

      <label className='label-for-file' htmlFor="fileInput" >
        <AttachmentIcon className="material-symbols-outlined"/>
      </label>

      <button
        className={`record-btn ${isRecording ? 'recording' : ''}`}
        onClick={isRecording ? stopRecording : startRecording}
        type="button"
      >
        <MicIcon className="material-symbols-outlined" />
      </button>

      <button type="button" onClick={() => handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>)}>
        <SendIcon className="material-symbols-outlined" />
      </button>
    </div>
  );
};

export default ChatFooter;
