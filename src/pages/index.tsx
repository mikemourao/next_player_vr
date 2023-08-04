import { Favorite, Home, Search } from '@mui/icons-material';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import {
  Card,
  CardContent,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

const MusicPlayer = () => {
  // Defina o estado para controlar a reprodução
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Função para alternar a reprodução
  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  // Lista de artistas favoritos (substitua por seus dados reais)
  const favoriteArtists = [
    { id: 1, name: 'Artista 1' },
    { id: 2, name: 'Artista 2' },
    { id: 4, name: 'Artista 3' },
    { id: 5, name: 'Artista 3' },
    { id: 6, name: 'Artista 3' },
    { id: 7, name: 'Artista 3' },
    { id: 8, name: 'Artista 3' },
    { id: 9, name: 'Artista 3' },
    { id: 10, name: 'Artista 3' },
    { id: 11, name: 'Artista 3' },
    { id: 12, name: 'Artista 3' },
    { id: 13, name: 'Artista 3' },
    { id: 14, name: 'Artista 3' },
    { id: 15, name: 'Artista 3' },
    { id: 16, name: 'Artista 3' },
    { id: 17, name: 'Artista 3' },
  ];

  // Lista de recomendações (substitua por seus dados reais)
  const recommendations = [
    { id: 18, name: 'Recomendação 1' },
    { id: 19, name: 'Recomendação 2' },
    { id: 20, name: 'Recomendação 3' },
    { id: 21, name: 'Recomendação 3' },
    { id: 22, name: 'Recomendação 3' },
    { id: 23, name: 'Recomendação 3' },
    { id: 24, name: 'Recomendação 3' },
    { id: 25, name: 'Recomendação 3' },
    { id: 26, name: 'Recomendação 3' },
    { id: 27, name: 'Recomendação 3' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Menu lateral expansivo */}
      <Drawer variant="permanent">
        <List>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText primary="Pesquisa" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Favorite />
            </ListItemIcon>
            <ListItemText primary="Favoritos" />
          </ListItem>
        </List>
      </Drawer>

      <div style={{ flex: 1, padding: 16 }}>
        <Grid container spacing={2} marginLeft={20}>
          {/* Lista de artistas favoritos */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Favoritos
            </Typography>
            <div
              style={{ display: 'flex', overflowX: 'auto', padding: '8px 0' }}
            >
              {favoriteArtists.map((artist) => (
                <Card
                  key={artist.id}
                  variant="outlined"
                  style={{ marginRight: 16 }}
                >
                  <CardContent>
                    <Typography variant="subtitle1">{artist.name}</Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Grid>

          {/* Lista de recomendações */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Recomendações
            </Typography>
            <div
              style={{ display: 'flex', overflowX: 'auto', padding: '8px 0' }}
            >
              {recommendations.map((recommendation) => (
                <Card
                  key={recommendation.id}
                  variant="outlined"
                  style={{ marginRight: 16 }}
                >
                  <CardContent>
                    <Typography variant="subtitle1">
                      {recommendation.name}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Grid>

          {/* Player de música atual */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Card>
                <CardContent>
                  {/* Título da música */}
                  <Typography gutterBottom variant="h5" component="div">
                    Música de Exemplo
                  </Typography>
                  {/* Nome do artista */}
                  <Typography variant="subtitle1" component="div">
                    Artista de Exemplo
                  </Typography>
                  {/* Capa da música (você pode adicionar uma imagem aqui) */}
                  <div
                    style={{ width: '100%', height: 200, background: '#ccc' }}
                  />
                  {/* Controles */}
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <IconButton onClick={togglePlay}>
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                      </IconButton>
                    </Grid>
                    <Grid item xs>
                      {/* Barra de progresso do áudio (você pode adicionar uma barra de progresso aqui) */}
                      <div
                        style={{ width: '100%', height: 4, background: '#ccc' }}
                      />
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <VolumeUpIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MusicPlayer;
