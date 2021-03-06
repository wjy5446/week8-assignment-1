import styled from '@emotion/styled';

const InputWrapper = styled.div({
  width: '400px',
  padding: '.5em 0',
  '& label': {
    display: 'block',
    fontSize: '1.3em',
    fontWeight: 'bold',
    color: '#0d0c22',
    marginBottom: '.3em',
  },

  '& input': {
    height: '2em',
    width: '100%',
    backgroundColor: '#f3f3f4',
    color: '#0d0c22',
    fontSize: '.8em',
    borderRadius: '.5em',
    padding: '0.5em 1em',
    marginBottom: '1.5em',
    border: '0',
    outline: 'none',

    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: 'rgba(0,0,0,0.1)',
      boxShadow: '0 0 0 4px rgba(234,76,137,0.1)',
    },
  },
});

export default InputWrapper;
