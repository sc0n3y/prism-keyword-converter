import React, { useState, ChangeEvent } from 'react';
import csvtojson from 'csvtojson';
import { Button, Container, TextareaAutosize, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ConverterContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '2rem',
  padding: '1rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  backgroundColor: '#fff'
});

const Converter: React.FC = () => {
  const [csvInput, setCsvInput] = useState('');
  const [convertedKeywords, setConvertedKeywords] = useState('');

  const convertKeywords = async () => {
    try {
      const keywords = await csvtojson().fromString(csvInput);
      const converted = keywords.map((keyword: { [key: string]: string }) =>
        "(" +
        Object.values(keyword)
          .map((value: string) => `+${value}`)
          .join(", ") +
        ")"
      );
      setConvertedKeywords(converted.join("\n"));
    } catch (error) {
      console.error("Error converting keywords:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCsvInput(e.target.value);
  };

  return (
    <ConverterContainer>
      <Typography variant="h3" component="h1" align="center">
        PrismAIO CSV Keyword Converter
      </Typography>
      <TextareaAutosize
        minRows={10}
        cols={50}
        value={csvInput}
        onChange={handleInputChange}
        placeholder="Enter CSV Keywords"
      />
      <Button variant="contained" onClick={convertKeywords}>
        Convert
      </Button>
      <div>
        <Typography variant="h4" component="h2">
          Converted Keywords:
        </Typography>
        <pre>{convertedKeywords}</pre>
      </div>
    </ConverterContainer>
  );
};

export default Converter;
