import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Button, Divider, Paper, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = "Novo",

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
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
      {mostrarBotaoSalvar && (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Save />}
        >
          Salvar
        </Button>
      )}
      {mostrarBotaoSalvarEFechar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Save />}
        >
          Salvar e voltar
        </Button>
      )}
      {mostrarBotaoApagar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Delete />}
        >
          Apagar
        </Button>
      )}
      {mostrarBotaoNovo && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Add />}
        >
          {textoBotaoNovo}
        </Button>
      )}
      <Divider variant="middle" orientation="vertical" />
      {mostrarBotaoVoltar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<ArrowBack />}
        >
          Voltar
        </Button>
      )}
    </Box>
  );
};
