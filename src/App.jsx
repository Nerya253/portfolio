import {
  BugReport,
  Code,
  Download,
  Email,
  GitHub,
  KeyboardArrowUp,
  Language,
  LinkedIn,
  Menu as MenuIcon,
  OpenInNew,
  Phone,
  Storage,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Drawer,
  Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const portfolioData = {
  name: 'Nerya Levi',
  role: 'Practical Software Engineering Student (Final Year)',
  about:
    'Building hands-on skills through coursework and personal projects, with a focus on clean code, structured testing, and solid end-to-end implementation.',
  email: 'nerya253@gmail.com',
  phone: '+972 52-285-9094',
  github: 'https://github.com/Nerya253',
  linkedin: 'https://www.linkedin.com/in/nerya-levi-190949329/',

  skills: [
    { name: 'React & JavaScript', icon: <Language /> },
    { name: 'Node.js', icon: <Storage /> },
    { name: 'RBAC', icon: <Code /> },
    // { name: 'Python (Basics)', icon: <Code /> },
    { name: 'QA & Testing', icon: <BugReport /> },
    { name: 'SQL & MongoDB', icon: <Storage /> },
    { name: 'C# / .NET', icon: <Code /> },
    { name: 'Git & GitHub', icon: <GitHub /> },
  ],

  projects: [
    {
      title: 's-bins',
      description: 'Customer relationship management system.',
      tags: ['React', 'Node.js', 'MongoDB', 'CSS tailwind'],
      links: { github: 'https://github.com/Atshmuel/s-bin', demo: 'https://s-bins.duckdns.org' },
      status: 'done',
    },
    {
      title: 'CRM system',
      description: 'Smart locker rental system for tools and gardening equipment.',
      tags: ['React', 'Node.js', 'MongoDB', 'ESP8266'],
      links: { github: 'https://github.com/Nerya253/CRM', demo: 'http://crm-nerya.duckdns.org:8081' },
      status: 'done',
    },
  ],
};

let theme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'light',
    primary: { main: '#2563eb' },
    secondary: { main: '#475569' },
    background: { default: '#f8fafc', paper: '#ffffff' },
    text: { primary: '#1e293b', secondary: '#64748b' },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Arial, sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    button: { fontWeight: 600 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 8, padding: '8px 20px' } } },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          transition: '0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
    MuiChip: { styleOverrides: { root: { borderRadius: 8, fontWeight: 500 } } },
  },
});
theme = responsiveFontSizes(theme);

function ScrollTop({ children }) {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) anchor.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  return (
    <Slide direction="up" in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 99 }}>
        {children}
      </Box>
    </Slide>
  );
}

function statusLabel(status) {
  if (status === 'in-progress') return 'In Progress';
  if (status === 'planned') return 'Planned';
  if (status === 'done') return 'Live';
  return null;
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 4 }}>
      <Typography variant="h6" sx={{ my: 2, color: 'primary.main', fontWeight: 'bold' }}>
        {portfolioData.name}
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component="a" href={item.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton component="a" href="/cv.pdf" download="Nerya_Levi_CV.pdf" sx={{ textAlign: 'center', color: 'primary.main' }}>
            <Download sx={{ mr: 1 }} />
            <ListItemText primary="Download Resume" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="back-to-top-anchor" />

      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: '1px solid #e2e8f0',
          bgcolor: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold', cursor: 'pointer' }}>
            Nerya<span style={{ color: '#1e293b' }}>.Dev</span>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button key={item.label} href={item.href} sx={{ color: 'text.primary', mx: 1 }}>
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              href="/cv.pdf"
              download="Nerya_Levi_CV.pdf"
              startIcon={<Download />}
              sx={{ mx: 1, borderRadius: 50, fontWeight: 'bold' }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Box component="nav">
        <Drawer
          anchor="left"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        id="about"
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ mb: 3, display: 'inline-flex', p: 2, borderRadius: '50%', bgcolor: 'white', boxShadow: 3 }}>
            <Code fontSize="large" color="primary" sx={{ fontSize: 40 }} />
          </Box>

          <Typography variant="h2" gutterBottom color="text.primary">
            {portfolioData.name}
          </Typography>

          <Typography variant="h4" gutterBottom color="primary" sx={{ opacity: 0.9 }}>
            {portfolioData.role}
          </Typography>

          <Typography variant="body1" paragraph sx={{ maxWidth: 680, margin: '20px auto', fontSize: '1.1rem', color: 'text.secondary' }}>
            {portfolioData.about}
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Button variant="contained" size="large" startIcon={<GitHub />} href={portfolioData.github} target="_blank" rel="noreferrer">
              GitHub
            </Button>
            <Button variant="outlined" size="large" startIcon={<LinkedIn />} href={portfolioData.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container id="skills" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 5 }}>
          Skills
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {portfolioData.skills.map((skill, index) => (
            <Grid key={index}>
              <Chip
                icon={skill.icon}
                label={skill.name}
                sx={{
                  p: 2,
                  fontSize: '1rem',
                  bgcolor: 'white',
                  border: '1px solid #e2e8f0',
                  boxShadow: 1,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box id="projects" sx={{ py: 8, bgcolor: 'white' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
            Projects
          </Typography>

          <Grid container spacing={4}>
            {portfolioData.projects.map((project, index) => {
              const statusText = statusLabel(project.status);
              const hasDemo = !!project.links?.demo && project.links.demo !== '#';

              return (
                <Grid key={index} size={{ xs: 12, md: 4 }}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid #f1f5f9' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} sx={{ mb: 1 }}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                          {project.title}
                        </Typography>

                        {statusText && <Chip label={statusText} size="small" sx={{ bgcolor: '#eff6ff', color: '#1d4ed8', fontWeight: 700 }} />}
                      </Stack>

                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>

                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                        {project.tags.map((tag, idx) => (
                          <Chip key={idx} label={tag} size="small" sx={{ bgcolor: '#eff6ff', color: '#1d4ed8' }} />
                        ))}
                      </Stack>
                    </CardContent>

                    <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                      <Button size="small" startIcon={<GitHub />} href={project.links.github} target="_blank" rel="noreferrer">
                        Source
                      </Button>

                      <Button
                        size="small"
                        endIcon={<OpenInNew />}
                        href={hasDemo ? project.links.demo : undefined}
                        target={hasDemo ? '_blank' : undefined}
                        rel={hasDemo ? 'noreferrer' : undefined}
                        disabled={!hasDemo}
                        title={!hasDemo ? 'No live demo available yet' : 'Open live demo'}
                      >
                        {hasDemo ? 'Live Demo' : 'Not available'}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <Container id="contact" sx={{ py: 8, textAlign: 'center' }}>
        <Box sx={{ maxWidth: 600, mx: 'auto', bgcolor: '#f8fafc', p: 4, borderRadius: 4, border: '1px solid #e2e8f0' }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            Contact
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            <Button variant="contained" fullWidth size="large" startIcon={<Email />} href={`mailto:${portfolioData.email}`}>
              nerya253@gmail.com
            </Button>
            <Button variant="outlined" fullWidth size="large" startIcon={<Phone />} href={`tel:${portfolioData.phone}`}>
              {portfolioData.phone}
            </Button>
          </Stack>
        </Box>
      </Container>

      <Box sx={{ py: 3, textAlign: 'center', bgcolor: '#1e293b', color: 'white' }}>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} {portfolioData.name} | Built with React and Material UI
        </Typography>
      </Box>

      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top" color="primary">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default App;
