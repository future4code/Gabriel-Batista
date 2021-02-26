import GlobalState from './Global/GlobalState';
import { BaseContainer, EmAlta, PostList, BaseBox } from './Componentes/Styled';
import Header from './Componentes/Header';
import Destaques from './Componentes/Destaques';
import PostsList from './Componentes/PostsList';
import LoginPage from './Componentes/loginPages/LoginPage';
import RegisterPage from './Componentes/loginPages/RegisterPage';


function App() {
  return (
    <GlobalState>
      <BaseContainer>
        <Header />
        <BaseBox>
          <Destaques/>
          <PostsList/>
        </BaseBox>
      </BaseContainer>
    </GlobalState>
  );
}

export default App;
