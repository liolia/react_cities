import Main from '../main/main';
import Sorting from '../sorting/sorting';

type AppScreenProps = {
  placesCount: number,
  sortType: string
}

function App(mainProps: AppScreenProps): JSX.Element {
  return (
    <div>
      <Main placesCount={mainProps.placesCount} />
      <Sorting sortType={mainProps.sortType} />
    </div>
  );
}

export default App;
