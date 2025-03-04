import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Button, Divider, Paper, useTheme } from "@mui/material";

export const FerramentasDeDetalhe: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      component={Paper}
    >
      <Button
        variant="contained"
        color="primary"
        disableElevation
        startIcon={<Save />}
      >
        Salvar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Save />}
      >
        Salvar e voltar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Delete />}
      >
        Apagar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Add />}
      >
        Novo
      </Button>
      <Divider variant="middle" orientation="vertical" />
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<ArrowBack />}
      >
        Voltar
      </Button>
    </Box>
  );
};
