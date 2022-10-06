import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HandshakeIcon from '@mui/icons-material/Handshake';
import s from './CardProject.module.css';

// Desplegable
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function CardProject({ project, handleOpenMessageLogin }) {
  const theme = useTheme();

  // Desplegable:
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const mainTaskEjemplo = [
    { task: "Realizar test Front", status: true },
    { task: "Realizar test Back", status: true },
    { task: "Desarrollar componente de Login", status: false },
    { task: "Realizar Diseño Responsive en Figma", status: true },
  ]

  
  return (
    <>
    <Card sx={{ display: 'flex', margin: 5, width: 800, justifyContent: "space-between", borderRadius: 5 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 600 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div className={s.card_content_top}>
            <Typography component="div" variant="h5">
              { project.title }
            </Typography>
            <button className={s.btnCardProject} onClick={handleOpenMessageLogin}type="button"> Colaborar </button>
          </div>
          <Accordion onChange={handleChange('panel1')} sx={{ borderColor: 'white' }}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ backgroundColor: 'white', minHeight: 30, height: 30 }}>
              <Typography>Descripción: </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                  { project.description }
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion onChange={handleChange('panel1')} sx={{ borderColor: 'white' }}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ backgroundColor: 'white', minHeight: 30, height: 30 }}>
              <Typography>Tareas Pendientes: </Typography>
            </AccordionSummary>
            <AccordionDetails>
                { mainTaskEjemplo.length > 0 
                    ? mainTaskEjemplo.map((task) => {
                      return (
                          <Typography>
                            { `-- ${task.task }` }
                          </Typography>
                      )
                        })
                    : <Typography>-- Puntos de colaboración a coordinar con el Creador del Proyecto.</Typography>
                }
            </AccordionDetails>
          </Accordion>
          
        
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <GitHubIcon sx={{ height: 40, width: 40, color: 'white' }}/>
          </IconButton>
          <IconButton aria-label="next">
            <WhatsAppIcon sx={{ height: 40, width: 40, color: 'white' }}/>
          </IconButton>

          <Typography variant="subtitle1" color="text.secondary" component="div">
            <span className='titleTechs'>Techs: </span>{ 
                project?.tech?.length > 0 && project?.tech.map(element => {
                return (<span key={Math.random()}>{`${element.charAt(0).toUpperCase() + element.slice(1)}, `} </span>)
              })
            }
        </Typography>

        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ 
          position: "right",
          width: 200,
          height: 200,
          borderBottomLeftRadius: 100,
          borderTopLeftRadius: 100,
          backgroundColor: '#424242'
        }}
        src={project.image}
        alt={project.title}
      />
    </Card>
    </>
  );
}
