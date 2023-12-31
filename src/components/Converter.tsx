import React, { useState, ChangeEvent } from "react";
import csvtojson from "csvtojson";
import { Button, Container, TextareaAutosize, Typography } from "@mui/material";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ConverterContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  marginTop: "2rem",
  padding: "1rem",
  border: "1px solid #ddd",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
  backgroundColor: "#fff",
  backgroundImage: 'url("banner.jpg")',
});
const Footer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
  gap: '1rem',
  fontSize: '0.8rem',
  color: '#fff',
});
const Converter: React.FC = () => {
  const [csvInput, setCsvInput] = useState("");
  const [convertedKeywords, setConvertedKeywords] = useState("");

  const convertKeywords = async () => {
    try {
      const keywords = await csvtojson({ noheader: true }).fromString(csvInput);
      const converted = keywords.map((keyword: { [key: string]: string }) => {
        const convertedValues = Object.keys(keyword).map((key: string) => {
          const value = keyword[key];
          if (value.startsWith("-")) {
            // Preserve "-" prefix in the output
            return value;
          } else if (value.startsWith("+")) {
            // If input already has "+", remove additional "+"
            return value.replace(/^\+/, "").trim();
          } else {
            // Append "+" prefix for other values
            return value.trim() ? `+${value.trim()}` : "";
          }
        });
        return `(${convertedValues.filter(Boolean).join(", ")})`;
      });
      setConvertedKeywords(converted.join("\n"));
    } catch (error) {
      console.error("Error converting keywords:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCsvInput(e.target.value);
  };

  const currentYear = new Date().getFullYear();
  const author = "sc0n3y";

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
        placeholder="nike,dunk,low,sb,-be,-true"
      />
      <Button variant="contained" onClick={convertKeywords}>
        Convert
      </Button>
      <div>
        <Typography variant="h4" component="h2">
          Converted Keywords:
        </Typography>
        <TextareaAutosize
          minRows={10}
          cols={50}
          value={convertedKeywords}
          readOnly
        />
      </div>
      <Footer>
        <Typography variant="body2" component="span" style={{ color: '#fff' }}>
          &copy; {currentYear} by{' '}
          <a
            href="https://github.com/sc0n3y"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff' }}
          >
            {author}
          </a>{' '}
          with ❤️ for{' '}
          <a
            href="https://prismaio.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff' }}
          >
            PrismAIO
          </a>
        </Typography>
      </Footer>
    </ConverterContainer>
  );
};

export default Converter;
