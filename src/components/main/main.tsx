type MainProps = {
  placesCount: number;
}

function Main({placesCount}: MainProps): JSX.Element {
  return (
    <section className = "cities__places places">
      <h2 className = "visually-hidden">Places</h2>
      <b className = "places__found">{placesCount} places to stay</b>
    </section>
  );
}

export default Main;
