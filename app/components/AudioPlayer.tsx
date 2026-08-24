import { useState } from 'react';
import { RiMenuAddLine } from 'react-icons/ri';
import { TrackInfo } from './TrackInfo';
import { Controls } from './Controls';
import { ProgressBar } from './ProgressBar';
//import { VolumeControl } from './VolumeControl';
//import { PlayList } from './PlayList';

export const AudioPlayer= (props) =>{
  const [openDrawer,setOpenDrawer] = useState(false);
  return (
    <div>
      <div className="min-h-8 bg-[#2e2d2d] fixed z-2 bottom-0 left-0 right-0 flex flex-col gap-9 lg:flex-row justify-between items-center text-white p-[0.5rem_10px]">
        <TrackInfo />
        <div className="w-full flex flex-col items-center gap-1 m-auto flex-1">
          <Controls track={props.track} />
          
        </div>
        <div>
          <ProgressBar />
        </div>
        
      </div>
      
    </div>
  );
};

export default AudioPlayer