import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useRef } from 'react';
import { useRecoilState } from "recoil";
import { cardList } from '../../states/state/atom';


interface CardDataProps {
 title: string | undefined,
 description: string | undefined,
 index: any;
}

export const CardNote = ({title, description, index}: CardDataProps ) => {

 const [cardNoteList, setCardNoteList] = useRecoilState(cardList);

 const dragItemRef = useRef<number>(2);
 const dragOverItemRef = useRef(2);

 const handleDragStart = (e: any, position: any) => {
  dragItemRef.current = position;
 }

 const handleDragEnter = (e: any, position: any) => {
  dragOverItemRef.current = position;
 }

 const handleDrop = (e: any) => {
  let copyListItems = [...cardNoteList];
  const dragItem = copyListItems[dragItemRef.current];
  const test = dragItemRef.current;
  const test2 = dragOverItemRef.current;
  copyListItems.splice(test, 1);
  copyListItems.splice(test2, 0, dragItem );
  dragItemRef.current = 0;
  dragOverItemRef.current = 0;
  setCardNoteList(copyListItems);
 }

 const handleDelete = (index: number) => {
  const cardNotes = [...cardNoteList];
  cardNotes.splice(index, 1);
  setCardNoteList(cardNotes);
 };

 return (
  <div 
   style={{border: 'solid yellowgreen 2px', borderRadius: '4px', width: '272px', height: '332px' }} 
   onDragStart = {(e) => handleDragStart(e, index) }
   onDragEnter={(e) => handleDragEnter(e, index)}
   onDragEnd={handleDrop}
   draggable
   >
   <Card sx={{ width: '100%', height: '100%'}}>
    <CardContent>
     <div style={{display: 'flex', justifyContent: 'right' }}>
      <button onClick={() => handleDelete(index)} style={{border: 'none', background: 'none', color: 'yellowgreen', fontSize: '22px', cursor: 'pointer'}}>X</button>
     </div>
     <Typography variant="h4" component="div">
      {title}
     </Typography>
     <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {description}
     </Typography>
    </CardContent>
    <CardActionArea />
   </Card>
  </div>
 )
}