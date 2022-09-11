import Main from '../main/main';

type AppProps = {
  placesCount: number,
}

export default function App({placesCount}: AppProps): JSX.Element {
  return (
    <Main placesCount={placesCount} />
  );
}
