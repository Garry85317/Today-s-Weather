import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material';
import dayjs from 'dayjs';
import { isMobile } from 'lib/platform';
import useSearchNavigate from 'services/hooks/useSearchNavigate';
import { RootState } from 'services/reducers/rootReducer';
import { deleteHistory } from 'services/reducers/slices/historySlice';
import { ILocation } from 'services/reducers/type';

const History = () => {
  const dispatch = useDispatch();
  const { searchNavigate } = useSearchNavigate();
  const history = useSelector((state: RootState) =>
    [...state.history].sort((a, b) => dayjs(b.time).diff(dayjs(a.time)))
  );
  const handleSearch = (country?: string, city?: string) => {
    searchNavigate({ city: city + ',' + country });
  };
  const handleClear = (item: ILocation) => {
    dispatch(
      deleteHistory(history.filter((res: ILocation) => res.rid !== item.rid))
    );
  };

  return (
    <HistoryContainer>
      <HistoryTitle>Search History</HistoryTitle>
      <HistoryContent>
        {history.length ? (
          history.map((item: ILocation) => (
            <HistoryItem key={item.rid}>
              <div className="left">
                <div>
                  {item.country},{item.city}
                </div>
                <HistoryTime>{item.time}</HistoryTime>
              </div>
              <div className="right">
                <IconButton
                  onClick={() => handleSearch(item.country, item.city)}
                >
                  <SearchIcon />
                </IconButton>
                <IconButton onClick={() => handleClear(item)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </HistoryItem>
          ))
        ) : (
          <div className="text-center text-gray-500">No Record</div>
        )}
      </HistoryContent>
    </HistoryContainer>
  );
};

export default History;

const HistoryContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor:
    theme.palette.mode === 'dark' ? '#1A1A1A4D' : 'rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  marginTop: '20px',
  padding: '15px',
  gap: '20px',
  height: isMobile() ? '45vh' : '50vh',
  overflow: 'auto',

  '&::-webkit-scrollbar': {
    width: '3px'
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
    margin: '20px 130px'
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '10px'
  }
}));

const HistoryTitle = styled('div')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? 'white' : 'black'
}));

const HistoryContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px'
}));

const HistoryItem = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  borderRadius: '10px',
  backgroundColor:
    theme.palette.mode === 'dark' ? '#1A1A1A80' : 'rgba(255, 255, 255, 0.4)',
  gap: isMobile() ? '0' : '10px',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',

  '& .left': {
    flex: 1,
    display: isMobile() ? 'block' : 'flex',
    justifyContent: 'space-between'
  },
  '& .right': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px'
  }
}));

const HistoryTime = styled('div')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'black'
}));

const IconButton = styled('div')(({ theme }) => ({
  borderRadius: '50%',
  border: `1px solid ${
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'white'
  }`,
  backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'white',
  padding: '5px',
  cursor: 'pointer',
  color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'black'
}));
