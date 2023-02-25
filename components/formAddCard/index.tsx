import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { cardList } from '../../states/state/atom';

// interface CardNoteType {
//   id: string,
//   title: string,
//   content: string;
// }

export const AddCard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState<string>();
  const [noteContent, setNoteContent] = useState<string>();

  const setCardNoteList = useSetRecoilState(cardList)

  const handleSubmit = () => {
    const newCard = {
      id: '1',
      title: noteTitle,
      content: noteContent
    }
    setCardNoteList((prevState: any) => [...prevState, newCard] as any)
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{position: 'fixed', top: '30px'}}>
        <Button
          onClick={() => setDialogOpen(true)}
          variant="outlined"
          style={{  border: 'solid 3px #C147E9', color: 'white', fontSize: '28px', width: '302px', marginTop: '22px', cursor: 'pointer'}}
        >
          + Add Card
        </Button>
      </div>
      <Dialog 
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        >
          <div style={{background: '#2D4059', border: '3px solid #FF5722'}}>
            <DialogTitle style={{color: 'white'}}>NEW NOTE</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Note Title"
                type="text"
                fullWidth
                variant="outlined"
                onChange={(e) => setNoteTitle(e.target.value)}
                style={{border: 'white'}}
                color='primary'
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                onChange={(e) => setNoteContent(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setDialogOpen(false)} style={{color: 'white'}}>
                Cancel
              </Button>
              <Button onClick={() => { 
                handleSubmit(); 
                setDialogOpen(false) }} 
                onKeyPress={(e) => {if(e.key === 'Enter'){ handleSubmit(); setDialogOpen(false) }} }
                style={{color: 'white'}}
              >
                Ok
              </Button>
            </DialogActions>

          </div>
      </Dialog>
    </div>
  )
}