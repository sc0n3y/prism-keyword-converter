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
  backgroundColor: '#fff',
  backgroundImage: 'https://780921246-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Mjpf0oK2XC20C94VPcj%2F-MkO94f_e5GkpwEUXZga%2F-MkO9SYf4pAIbBozt6B4%2F1500x500.jpg%20copy.jpg?alt=media&token=42847701-5cd9-4f95-8e59-bae7e9b29539'
});

const Converter: React.FC = () => {
  const [csvInput, setCsvInput] = useState('');
  const [convertedKeywords, setConvertedKeywords] = useState('');

  const convertKeywords = async () => {
    try {
      const keywords = await csvtojson().fromString(csvInput);
      const converted = keywords.map((keyword: { [key: string]: string }) => {
        const convertedValues = Object.values(keyword).map((value: string) => {
          if (value.startsWith('-')) {
            // Preserve "-" prefix in the output
            return value;
          } else {
            // Append "+" prefix for other values
            return `+${value}`;
          }
        });
        return `(${convertedValues.join(', ')})`;
      });
      setConvertedKeywords(converted.join('\n'));
    } catch (error) {
      console.error('Error converting keywords:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCsvInput(e.target.value);
  };

  return (
    <ConverterContainer>
      <Typography variant="h3" component="h1" align="center">
        PrismAIO Shopify CSV Keyword Converter
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
